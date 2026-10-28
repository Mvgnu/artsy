"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { dateClaims, labelFor, predicateRegistry } from "@artsy/core";
import type { Claim, Corpus, Entity, Evidence, ImageAsset } from "@artsy/core";
import { createGraph, decodeWalk, explain, neighbors, search } from "@artsy/graph";
import type { ClaimExplanation, GraphIndex, Neighbor, WalkState } from "@artsy/graph";
import { imageFor } from "@artsy/media";
import type { ExplorerProps } from "./contract";
import { branchWalk, extendWalk, walkHref } from "./walk";

export type { ExplorerProps } from "./contract";

const groupTitles: Record<string, string> = {
  history: "Follow the work",
  maker: "Meet the maker",
  motif: "Follow a subject",
  material: "Follow the material",
  period: "Find its context",
  place: "Go somewhere",
  context: "Look around it",
};

const basisLabels: Record<Claim["basis"], string> = {
  catalogue: "Catalogue statement",
  scholarship: "Scholarly interpretation",
  editorial: "Editorial interpretation",
  computed: "Computed connection",
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" className="ar-arrow">
    {diagonal
      ? <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" />
      : <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />}
  </svg>;
}

function Constellation() {
  return <svg className="ar-constellation" viewBox="0 0 160 120" fill="none" aria-hidden="true">
    <path d="m25 84 49-45 59 46M74 39l21-25m-21 25-2 67M25 84l47 22" stroke="currentColor" strokeWidth="1" />
    <circle cx="25" cy="84" r="7" fill="currentColor" />
    <circle cx="74" cy="39" r="12" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="133" cy="85" r="5" fill="currentColor" />
    <circle cx="95" cy="14" r="4" fill="currentColor" />
    <circle cx="72" cy="106" r="4" stroke="currentColor" />
  </svg>;
}

function Kind({ entity }: { entity: Entity }) {
  return <span className="ar-kind">{entity.kind === "person" ? "Artist / person" : entity.kind}</span>;
}

function ArtworkImage({ asset, compact = false, onInspect }: {
  asset: ImageAsset;
  compact?: boolean;
  onInspect?: () => void;
}) {
  const imageUrl = compact ? (asset.thumbnailUrl ?? asset.url) : asset.url;
  const imageKey = `${asset.id}:${imageUrl}`;
  const imageRef = useRef<HTMLImageElement>(null);
  const [failedKey, setFailedKey] = useState<string | null>(null);
  const failed = failedKey === imageKey;
  useEffect(() => {
    // A server-rendered image can fail before React attaches onError. Inspect
    // its settled browser state after hydration without treating a still-loading
    // image (complete === false) as a failure. A new asset/URL has a fresh key.
    const element = imageRef.current;
    if (element?.complete && element.naturalWidth === 0) setFailedKey(imageKey);
  }, [imageKey]);
  if (failed) return <div className={compact ? "ar-thumb ar-thumb-missing" : "ar-image-unavailable"}>
    {compact ? <span aria-label="Image unavailable">◇</span> : <>
      <Constellation />
      <p>The image is unavailable.</p>
      <span>The artwork and its connections are still here.</span>
    </>}
  </div>;
  const picture = <img
    ref={imageRef}
    src={imageUrl}
    alt={compact ? "" : asset.alt}
    width={asset.width}
    height={asset.height}
    loading={compact ? "lazy" : "eager"}
    decoding="async"
    onError={() => setFailedKey(imageKey)}
    onLoad={() => setFailedKey(null)}
    className={compact ? "ar-thumb" : "ar-artwork-image"}
  />;
  if (onInspect && !compact) return <button type="button" className="ar-image-button" onClick={onInspect} aria-label="Open a larger view of this artwork">{picture}</button>;
  return picture;
}

function SourceLinks({ corpus, evidenceIds, children }: {
  corpus: Corpus;
  evidenceIds: readonly string[];
  children?: string;
}) {
  const records = corpus.evidence.filter((item) => evidenceIds.includes(item.id));
  const unique = records.filter((item, index) => records.findIndex((other) => other.url === item.url) === index);
  return <>{unique.map((record) => {
    const source = corpus.sources.find((item) => item.id === record.sourceId);
    return <a key={record.id} href={record.url} target="_blank" rel="noreferrer" className="ar-source-link">
      {children ?? source?.name ?? "Source record"}<Arrow diagonal />
      <span className="ar-sr-only"> (opens in a new tab)</span>
    </a>;
  })}</>;
}

function claimTitle(graph: GraphIndex, claim: Claim): string {
  const subject = graph.entities.get(claim.subject);
  const object = claim.object.type === "entity" ? graph.entities.get(claim.object.id) : undefined;
  const objectLabel = object ? labelFor(object)
    : claim.object.type === "time" ? claim.object.value.display
    : claim.object.type === "text" ? claim.object.value : "Unknown record";
  return `${subject ? labelFor(subject) : claim.subject} · ${predicateRegistry[claim.predicate].label} · ${objectLabel}`;
}

function EvidenceRecord({ record, corpus }: { record: Evidence; corpus: Corpus }) {
  const source = corpus.sources.find((item) => item.id === record.sourceId);
  return <li className="ar-evidence-record">
    <a href={record.url} target="_blank" rel="noreferrer" className="ar-evidence-source">
      {source?.name ?? record.sourceId}<Arrow diagonal /><span className="ar-sr-only"> (opens in a new tab)</span>
    </a>
    <p>{record.note}</p>
    <dl>
      <div><dt>Find it in</dt><dd>{record.locator}</dd></div>
      {record.recordId && <div><dt>Source record</dt><dd>{record.recordId}</dd></div>}
      <div><dt>Retrieved</dt><dd><time dateTime={record.retrievedAt}>{record.retrievedAt.slice(0, 10)}</time></dd></div>
      {source && <div><dt>Metadata terms</dt><dd>{source.metadataLicense}</dd></div>}
    </dl>
  </li>;
}

function EvidencePanel({ graph, entity, explanation, panelId, onClose }: {
  graph: GraphIndex;
  entity: Entity;
  explanation: ClaimExplanation | undefined;
  panelId: string;
  onClose: () => void;
}) {
  const records = explanation?.evidence ?? graph.corpus.evidence.filter((record) => entity.evidenceIds.includes(record.id));
  return <section className="ar-evidence-panel" id={panelId} aria-labelledby={`${panelId}-heading`}>
    <div className="ar-panel-top">
      <p className="ar-eyebrow">Look at the evidence</p>
      <button type="button" className="ar-close" onClick={onClose} aria-label="Close evidence">×</button>
    </div>
    <h3 id={`${panelId}-heading`}>{explanation ? claimTitle(graph, explanation.claim) : labelFor(entity)}</h3>
    {explanation && <>
      <div className="ar-badges"><span>{basisLabels[explanation.claim.basis]}</span><span>{explanation.claim.status}</span>
        {explanation.claim.qualifiers.attribution && <span>{explanation.claim.qualifiers.attribution.replaceAll("-", " ")}</span>}
      </div>
      {explanation.claim.qualifiers.explanation && <p className="ar-evidence-context">{explanation.claim.qualifiers.explanation}</p>}
      {explanation.claim.qualifiers.validDuring && <p>Applies during: {explanation.claim.qualifiers.validDuring.display}</p>}
      {explanation.claim.qualifiers.derivation && <p className="ar-derivation">
        Computed using {explanation.claim.qualifiers.derivation.algorithm}, version {explanation.claim.qualifiers.derivation.version}.
        Inputs: {explanation.claim.qualifiers.derivation.inputClaimIds.join(", ")}.
      </p>}
    </>}
    <ul className="ar-evidence-list">{records.map((record) => <EvidenceRecord key={record.id} record={record} corpus={graph.corpus} />)}</ul>
    <p className="ar-evidence-footnote">These records support this statement. Their dates, attributions and terminology remain the source’s own.</p>
  </section>;
}

function starterEntities(graph: GraphIndex): { entity: Entity; label: string; subtitle: string }[] {
  const starters: { entity: Entity; label: string; subtitle: string }[] = [];
  const study = graph.corpus.claims.find((claim) => claim.predicate === "study_for" && claim.status === "asserted" && claim.object.type === "entity");
  const studyEntity = study ? graph.entities.get(study.subject) : undefined;
  if (studyEntity) starters.push({ entity: studyEntity, label: "Before the finished work", subtitle: "Follow a study into its final work" });
  const motifClaims = graph.corpus.claims.filter((claim) => claim.predicate === "depicts" && claim.status === "asserted" && claim.object.type === "entity");
  for (const claim of motifClaims) {
    if (claim.object.type !== "entity") continue;
    const targetId = claim.object.id;
    const matches = motifClaims.filter((other) => other.object.type === "entity" && other.object.id === targetId && other.subject !== claim.subject);
    const entity = graph.entities.get(claim.subject);
    const motif = graph.entities.get(targetId);
    if (matches.length && entity && motif?.kind === "concept") {
      starters.push({ entity, label: "A subject that travels", subtitle: `Find works depicting ${labelFor(motif)}` });
      break;
    }
  }
  return starters;
}

export function Explorer({ corpus, initialEntityId, title = "artsy" }: ExplorerProps) {
  const graph = useMemo(() => createGraph(corpus), [corpus]);
  const seedId = graph.entities.has(initialEntityId) ? initialEntityId : (corpus.entities[0]?.id ?? initialEntityId);
  const initialWalk = useMemo<WalkState>(() => ({ v: 1, dataset: corpus.datasetVersion, steps: [{ nodeId: seedId }] }), [corpus.datasetVersion, seedId]);
  const [walk, setWalk] = useState<WalkState>(initialWalk);
  const [routeError, setRouteError] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [includeDisputed, setIncludeDisputed] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<readonly string[]>([]);
  const [evidenceOpen, setEvidenceOpen] = useState(false);
  const [selectedClaimId, setSelectedClaimId] = useState<string | null>(null);
  const [inspectImage, setInspectImage] = useState(false);
  const [arrivalRequest, setArrivalRequest] = useState(0);
  const focusRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchId = useId();
  const evidenceId = useId();
  const trailId = useId();
  const lastStep = walk.steps.at(-1);
  const current = graph.entities.get(lastStep?.nodeId ?? seedId);
  const currentId = current?.id ?? seedId;
  const asset = imageFor(corpus, currentId);
  const nextSteps = useMemo(() => neighbors(graph, currentId, { includeDisputed, limit: 200 }), [graph, currentId, includeDisputed]);
  const groups = useMemo(() => {
    const result = new Map<string, Neighbor[]>();
    for (const neighbor of nextSteps) {
      const group = result.get(neighbor.group) ?? [];
      group.push(neighbor);
      result.set(neighbor.group, group);
    }
    return [...result.entries()].sort(([left], [right]) => {
      const order = ["history", "maker", "motif", "material", "period", "place", "context"];
      return order.indexOf(left) - order.indexOf(right);
    });
  }, [nextSteps]);
  const searchResults = useMemo(() => query.trim() ? search(graph, query) : [], [graph, query]);
  const starters = useMemo(() => starterEntities(graph), [graph]);
  const dates = dateClaims(corpus, currentId);
  const makers = nextSteps.filter((neighbor) => neighbor.claim.predicate === "made_by" && neighbor.direction === "forward");
  const lastClaim = lastStep?.viaClaimId ? graph.claims.get(lastStep.viaClaimId) : undefined;
  const explanation = selectedClaimId ? explain(graph, selectedClaimId) : undefined;

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    // The entity is the arrival point for a history visit too. Native scroll
    // restoration can otherwise return to a previous deep neighbor-list offset
    // after React has restored a different-sized page.
    window.history.scrollRestoration = "manual";
    const restore = (arrive: boolean) => {
      const token = new URL(window.location.href).searchParams.get("walk");
      if (!token) { setWalk(initialWalk); setRouteError(null); }
      else {
        const decoded = decodeWalk(token, graph);
        if (decoded.ok) { setWalk(decoded.walk); setRouteError(null); }
        else { setWalk(initialWalk); setRouteError(`This trail could not be restored: ${decoded.reason}`); }
      }
      setEvidenceOpen(false);
      setSelectedClaimId(null);
      setExpandedGroups([]);
      setInspectImage(false);
      if (arrive) setArrivalRequest((request) => request + 1);
    };
    const onPopState = () => restore(true);
    restore(false);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [graph, initialWalk]);

  useEffect(() => {
    // Both explicit navigation and popstate request arrival after the new walk
    // has committed. Initial hydration/reload does not request a scroll or focus.
    if (arrivalRequest === 0) return;
    const frame = window.requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
      focusRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [arrivalRequest]);

  useEffect(() => {
    if (inspectImage && asset && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
    if (!inspectImage && dialogRef.current?.open) dialogRef.current.close();
  }, [inspectImage, asset]);

  function navigate(next: WalkState, event?: MouseEvent<HTMLAnchorElement>) {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    event?.preventDefault();
    try {
      const href = walkHref(next);
      window.history.pushState({ artsy: true }, "", href);
      setWalk(next);
      setRouteError(null);
      setQuery("");
      setExpandedGroups([]);
      setEvidenceOpen(false);
      setSelectedClaimId(null);
      setInspectImage(false);
      setNotice("");
      setArrivalRequest((request) => request + 1);
    } catch (error) {
      setRouteError(error instanceof Error ? error.message : "This trail could not be saved. Return to an earlier stop to branch from there.");
    }
  }

  function startingAt(entityId: string): WalkState {
    return { v: 1, dataset: corpus.datasetVersion, steps: [{ nodeId: entityId }] };
  }

  function hrefFor(next: WalkState): string {
    try { return walkHref(next); } catch { return "#trail-limit"; }
  }

  function showEvidence(claimId: string | null) {
    setSelectedClaimId(claimId);
    setEvidenceOpen(true);
    requestAnimationFrame(() => document.getElementById(evidenceId)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" }));
  }

  async function shareTrail() {
    try {
      const href = walkHref(walk);
      const url = new URL(href, window.location.href).href;
      await navigator.clipboard.writeText(url);
      setNotice("Trail link copied. Every stop and connection is included.");
    } catch {
      setNotice("Copy the address from your browser to keep this trail.");
    }
  }

  if (!current) return <main className="ar-app"><h1>This starting point is unavailable.</h1><p>Choose a record present in this collection snapshot.</p></main>;

  return <div className="ar-app">
    <a href="#artsy-focus" className="ar-skip">Skip to the artwork</a>
    <header className="ar-header">
      <a href={hrefFor(initialWalk)} onClick={(event) => navigate(initialWalk, event)} className="ar-brand" aria-label={`${title} — start again`}>{title}<span className="ar-brand-dot">.</span></a>
      <p className="ar-header-note">Art is a place to get lost.<br /><span>Keep a thread to find your way.</span></p>
      <a href={`#${trailId}`} className="ar-header-trail">Your trail <span>{walk.steps.length}</span><Arrow /></a>
    </header>

    <main>
      <section className="ar-intro" aria-label="Explore the atlas">
        <div><p className="ar-eyebrow"><span className="ar-dot" /> An atlas of connections</p><p className="ar-intro-title">Begin anywhere.<br /><em>Follow what catches you.</em></p></div>
        <div className="ar-search-wrap">
          <label htmlFor={searchId}>Find a work, person, place or idea</label>
          <div className="ar-search-box">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" /><path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.5" /></svg>
            <input id={searchId} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where does your curiosity start?" type="search" autoComplete="off" aria-controls={`${searchId}-results`} />
          </div>
          {query.trim() && <div className="ar-search-results" id={`${searchId}-results`}>
            <p className="ar-search-hint">Choose a starting point for a new trail.</p>
            {searchResults.length ? <ul>{searchResults.slice(0, 12).map((entity) => <li key={entity.id}><a href={hrefFor(startingAt(entity.id))} onClick={(event) => navigate(startingAt(entity.id), event)}><span>{labelFor(entity)}</span><Kind entity={entity} /></a></li>)}</ul>
              : <p className="ar-search-empty">No match in this small collection yet. Try another word or a thread below.</p>}
            {searchResults.length > 12 && <p className="ar-search-hint">Showing 12 matches. Add another word to narrow your search.</p>}
          </div>}
        </div>
      </section>

      <div className="ar-proof-note"><span className="ar-proof-pill">First threads</span><p>A small, sourced collection to explore. More periods and places are still to come.</p></div>

      {routeError && <div className="ar-error" role="alert" id="trail-limit"><p>{routeError}</p><a href={hrefFor(initialWalk)} onClick={(event) => navigate(initialWalk, event)}>Start a fresh trail <Arrow /></a></div>}

      <nav className="ar-trail" id={trailId} aria-label="Your trail">
        <div className="ar-trail-heading"><span className="ar-eyebrow">Your thread</span><button type="button" className="ar-text-button" onClick={shareTrail}>Copy trail link <Arrow diagonal /></button></div>
        <ol>{walk.steps.map((step, index) => {
          const entity = graph.entities.get(step.nodeId);
          const claim = step.viaClaimId ? graph.claims.get(step.viaClaimId) : undefined;
          const relation = claim ? (step.direction === "reverse" ? predicateRegistry[claim.predicate].inverseLabel : predicateRegistry[claim.predicate].label) : undefined;
          return <li key={`${index}-${step.nodeId}`} className={index === walk.steps.length - 1 ? "ar-trail-current" : ""}>
            {relation && <span className="ar-trail-relation">{relation} <Arrow /></span>}
            <a href={hrefFor(branchWalk(walk, index))} onClick={(event) => navigate(branchWalk(walk, index), event)} aria-current={index === walk.steps.length - 1 ? "step" : undefined} title={index === walk.steps.length - 1 ? "Current stop" : "Return here and start another branch"}>
              <span className="ar-trail-number">{String(index + 1).padStart(2, "0")}</span><span>{entity ? labelFor(entity) : step.nodeId}</span>
            </a>
          </li>;
        })}</ol>
        <p className="ar-notice" role="status">{notice}</p>
      </nav>

      <section className="ar-focus" id="artsy-focus" aria-labelledby="artsy-entity-heading" ref={focusRef}>
        <div className="ar-visual-column">
          <div className={`ar-art-stage ${asset ? "" : "ar-art-stage-empty"}`}>
            <span className="ar-object-number">{String(walk.steps.length).padStart(2, "0")} / ON YOUR THREAD</span>
            {asset ? <ArtworkImage key={asset.id} asset={asset} onInspect={() => setInspectImage(true)} />
              : <div className="ar-entity-art"><Constellation /><span className="ar-eyebrow">{current.kind === "artwork" ? "Look beyond the image" : "A connection worth following"}</span><p>{labelFor(current)}</p><span>{current.kind === "artwork" ? "No image is available for display in this collection." : "Follow the works and ideas connected to this record."}</span></div>}
            {asset && <button className="ar-view-image" type="button" onClick={() => setInspectImage(true)}>Look closer <Arrow diagonal /></button>}
          </div>
          {asset && <div className="ar-image-credit"><p>{asset.rights.credit}</p><a href={asset.rights.rightsUrl} target="_blank" rel="noreferrer">{asset.rights.license ?? "Image rights"}<span className="ar-sr-only"> (opens in a new tab)</span><Arrow diagonal /></a></div>}
          <div className="ar-source-row"><span>From the source</span><SourceLinks corpus={corpus} evidenceIds={current.evidenceIds} /></div>
        </div>

        <div className="ar-detail-column">
          <div className="ar-entity-topline"><Kind entity={current} />{current.workLevel && <span>{current.workLevel.replaceAll("-", " ")}</span>}</div>
          <h1 id="artsy-entity-heading" tabIndex={-1} ref={headingRef}>{labelFor(current)}</h1>
          {makers.length > 0 && <div className="ar-makers">{makers.map((maker) => <a key={maker.claim.id} href={hrefFor(extendWalk(walk, maker))} onClick={(event) => navigate(extendWalk(walk, maker), event)}>{maker.claim.qualifiers.attribution && maker.claim.qualifiers.attribution !== "accepted" ? `${maker.claim.qualifiers.attribution.replaceAll("-", " ")} ` : ""}{labelFor(maker.entity)}<Arrow /></a>)}</div>}
          <div className="ar-date-list">{dates.length ? dates.map((claim) => <button type="button" key={claim.id} onClick={() => showEvidence(claim.id)} title="See the source of this date">{claim.object.value.display}<span className="ar-date-source" aria-hidden="true">↗</span><span className="ar-sr-only"> — see date evidence</span></button>) : <span className="ar-date-unknown">Date not recorded in this collection</span>}</div>
          {current.description && <p className="ar-description">{current.description}</p>}
          {current.period && <dl className="ar-period-context"><div><dt>Period scheme</dt><dd>{current.period.scheme}</dd></div><div><dt>Geographic scope</dt><dd>{current.period.spatialScope}</dd></div></dl>}

          {lastClaim && <button className="ar-arrival" type="button" onClick={() => showEvidence(lastClaim.id)}>
            <span className="ar-eyebrow">The thread you followed</span>
            <span>{lastStep?.direction === "reverse" ? predicateRegistry[lastClaim.predicate].inverseLabel : predicateRegistry[lastClaim.predicate].label}<Arrow /></span>
            <small>{basisLabels[lastClaim.basis]}{lastClaim.status === "disputed" ? " · disputed" : ""} · see why</small>
          </button>}

          <button type="button" className="ar-evidence-trigger" onClick={() => evidenceOpen && selectedClaimId === null ? setEvidenceOpen(false) : showEvidence(null)} aria-expanded={evidenceOpen && selectedClaimId === null} aria-controls={evidenceId}>Sources & evidence <span aria-hidden="true">{evidenceOpen && selectedClaimId === null ? "−" : "+"}</span></button>
          {evidenceOpen && <EvidencePanel graph={graph} entity={current} explanation={explanation} panelId={evidenceId} onClose={() => setEvidenceOpen(false)} />}

          <section className="ar-next" aria-labelledby="artsy-next-heading">
            <div className="ar-next-heading"><p className="ar-eyebrow">Choose a direction</p><h2 id="artsy-next-heading">Where to next?</h2></div>
            {!groups.length && <div className="ar-empty-neighbors"><p>No further connections are recorded here yet.</p><p>Return to an earlier stop or start another thread below.</p></div>}
            {groups.map(([group, items]) => {
              const expanded = expandedGroups.includes(group);
              const shown = expanded ? items : items.slice(0, 3);
              return <section key={group} className="ar-neighbor-group" aria-label={groupTitles[group] ?? group}>
                <h3>{groupTitles[group] ?? group}<span>{items.length}</span></h3>
                <ul>{shown.map((neighbor) => {
                  const neighborAsset = imageFor(corpus, neighbor.entity.id);
                  const nextWalk = extendWalk(walk, neighbor);
                  return <li key={`${neighbor.claim.id}-${neighbor.direction}`} className="ar-neighbor">
                    <a className="ar-neighbor-link" href={hrefFor(nextWalk)} onClick={(event) => navigate(nextWalk, event)}>
                      {neighborAsset ? <ArtworkImage asset={neighborAsset} compact /> : <span className="ar-neighbor-symbol" aria-hidden="true">{neighbor.entity.kind === "person" ? "◯" : neighbor.entity.kind === "place" || neighbor.entity.kind === "institution" ? "⌖" : "◇"}</span>}
                      <span className="ar-neighbor-copy"><span className="ar-relation">{neighbor.label}</span><span className="ar-neighbor-name">{labelFor(neighbor.entity)}</span>{neighbor.claim.status === "disputed" && <span className="ar-disputed">Disputed</span>}{neighbor.claim.basis === "computed" && <span className="ar-computed">Computed suggestion</span>}{neighbor.claim.basis === "editorial" && <span className="ar-computed">Editorial interpretation</span>}</span><Arrow />
                    </a>
                    <button type="button" className="ar-neighbor-evidence" onClick={() => showEvidence(neighbor.claim.id)} aria-label={`Why ${neighbor.label} ${labelFor(neighbor.entity)}?`}>Why this connection?</button>
                  </li>;
                })}</ul>
                {items.length > 3 && <button className="ar-show-all" type="button" onClick={() => setExpandedGroups(expanded ? expandedGroups.filter((item) => item !== group) : [...expandedGroups, group])}>{expanded ? "Show fewer" : `Show all ${items.length} connections`} <span aria-hidden="true">{expanded ? "−" : "+"}</span></button>}
              </section>;
            })}
            {nextSteps.length === 200 && <p className="ar-limit-note">Showing up to 200 connections in this view. This collection does not yet support larger neighborhoods.</p>}
            <label className="ar-disputed-toggle"><input type="checkbox" checked={includeDisputed} onChange={(event) => setIncludeDisputed(event.target.checked)} />Include disputed statements</label>
          </section>
        </div>
      </section>

      {starters.length > 0 && <section className="ar-starters" aria-labelledby="artsy-starters-heading">
        <div className="ar-starters-intro"><p className="ar-eyebrow">There is more than one way in</p><h2 id="artsy-starters-heading">Pull another thread.</h2><p>A work can lead you to its maker. A shared subject can take you somewhere else entirely.</p></div>
        <div className="ar-starter-grid">{starters.map((starter, index) => {
          const starterAsset = imageFor(corpus, starter.entity.id);
          return <a key={starter.entity.id} href={hrefFor(startingAt(starter.entity.id))} onClick={(event) => navigate(startingAt(starter.entity.id), event)} className="ar-starter">
            <div className="ar-starter-picture">{starterAsset ? <ArtworkImage asset={starterAsset} compact /> : <Constellation />}<span>{String(index + 1).padStart(2, "0")}</span></div>
            <div><h3>{starter.label}<Arrow /></h3><p>{starter.subtitle}</p></div>
          </a>;
        })}</div>
      </section>}
    </main>

    <footer className="ar-footer"><a className="ar-brand" href={hrefFor(initialWalk)} onClick={(event) => navigate(initialWalk, event)}>{title}<span className="ar-brand-dot">.</span></a><p>Follow curiosity. Keep the evidence.</p><details><summary>About this collection</summary><p>This is a bounded foundation collection, not a complete history of art. Source dates and attributions are preserved. A shared subject does not imply historical influence. Images may depend on their original hosts.</p><p>Collection version: {corpus.datasetVersion}</p></details></footer>

    {asset && <dialog className="ar-image-dialog" ref={dialogRef} aria-label={`Larger view: ${labelFor(current)}`} onClose={() => setInspectImage(false)} onCancel={() => setInspectImage(false)}>
      <div className="ar-dialog-header"><div><p className="ar-eyebrow">A closer look</p><h2>{labelFor(current)}</h2></div><button type="button" className="ar-close" onClick={() => setInspectImage(false)} aria-label="Close larger image">×</button></div>
      <div className="ar-dialog-image"><ArtworkImage asset={asset} /></div>
      <div className="ar-dialog-credit"><p>{asset.rights.credit}</p><a href={asset.url} target="_blank" rel="noreferrer">Open the source image <Arrow diagonal /><span className="ar-sr-only"> (opens in a new tab)</span></a></div>
      <p className="ar-dialog-note">Use your browser’s zoom to inspect details. This is the source image; it is not a generated reconstruction.</p>
    </dialog>}
  </div>;
}
