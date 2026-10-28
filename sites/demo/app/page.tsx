import { validateCorpus } from "@artsy/core";
import { Explorer } from "@artsy/explorer";
import snapshot from "../../../data/seed/atlas.json";

export default function DemoPage() {
  const result = validateCorpus(snapshot);
  if (!result.ok) throw new Error(`Invalid published corpus: ${JSON.stringify(result.issues)}`);
  return <Explorer corpus={result.corpus} initialEntityId="met:437658" title="Artsy" />;
}
