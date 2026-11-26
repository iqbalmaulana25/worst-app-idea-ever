// The Worst App Idea Ever Pitched
// One sentence, at most 240 characters, pitching the worst and most useless
// app imaginable. The pitch has to sound real — a founder certain of a
// product nobody on earth needs — and fail most brilliantly at the end,
// where the customer gets rated for being grateful.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Uber for borrowed chargers: strangers deliver a half-dead cable to your table, watch you plug in, and rate your gratitude.";

const limit = 240;
if ([...line].length > limit) {
  throw new Error(`pitch too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
