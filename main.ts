// One Line, One Laugh — make.fun entry
// Writes a single hilarious line (max 200 characters) to /output/entry.txt.
//
// The line: an appliance that quietly outsources its own job to its owner.
// A dishwasher that leaves the dishes dirty is not broken — it has
// delegated the washing to a human, and the human does it without a raise.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE = "My dishwasher outsourced its job to me.";

function main(): void {
  const outDir = process.env.ENTRY_OUTPUT
    ? dirname(process.env.ENTRY_OUTPUT)
    : "/output";
  const outFile = process.env.ENTRY_OUTPUT
    ? process.env.ENTRY_OUTPUT
    : join(outDir, "entry.txt");

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, LINE, "utf8");
}

main();
