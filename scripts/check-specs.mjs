import { readSpecs, checkSpecs } from './spec-lib.mjs';
const specs = readSpecs();
const errors = checkSpecs(specs);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Validated ${specs.length} domain specs: explicit bars, commands, status and disjoint ownership. Planned domains remain unimplemented.`);
