# Artsy working agreement

New work follows `specs/00_engine.md`, `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. Read the domain's `SPEC.md` and consumed `contract.ts` files before editing.

- The PM creates domains, freezes contracts and owns the files listed in Lop. Builders may write only within their spec's owned/test paths, excluding PM files. Critics are read-only.
- The canonical facts live in a validated, evidence-bearing corpus, not in components. No invented historical relationships, artist biographies, dates, rights or source identifiers.
- Preserve ambiguous dates, multiple period schemes, anonymous/collective makers, and distinct production/depiction/findspot/custody roles. Computed resemblance never proves influence.
- Use strict TypeScript and Zod at boundaries. No `any`, unchecked external JSON, duplicated core shapes, or type casts that hide an invalid contract.
- Source imports are independent of static site builds. Builds replay pinned data and do not require museum credentials.
- `frontend/`, `frontend/specs/` and `docs/product/` are the earlier product, retained as reference. New packages must not import them. Root workspace commands intentionally exercise the new engine; the existing frontend CI remains separate.
- Run the domain gates and architecture checks. A green test suite is admission to Gauntlet, not a quality verdict.
- Report disagreement plainly. Do not silently widen write permissions, fork a contract, erase uncertainty or manufacture a source.
- End each implementation report with: changed paths; actual commands/results; disagreements; remaining breakage.

For setup and the precise implemented/planned split, see `README.md` and `specs/implementation-status.md`.
