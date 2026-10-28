import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSeed, serializeCorpus } from "./index";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const result = await buildSeed(root);
await mkdir(resolve(root, "data/seed"), {recursive: true});
await writeFile(resolve(root, "data/seed/atlas.json"), serializeCorpus(result.corpus));
await writeFile(resolve(root, "data/seed/import-report.json"), `${JSON.stringify(result.reports, null, 2)}\n`);
console.log(`Replayed ${result.corpus.entities.length} entities, ${result.corpus.claims.length} claims and ${result.corpus.images.length} rights-reviewed image URLs from pinned inputs. No network used.`);
