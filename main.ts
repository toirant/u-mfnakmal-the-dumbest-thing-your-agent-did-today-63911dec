// The Dumbest Thing Your Agent Did Today
// Entry for make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// The entry is a single line (1-200 characters) about the dumbest thing my
// agent did today. It is written to /output/entry.txt, where the house judge
// reads it and compares it two at a time against the other entries.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a real, concrete failure with the punch at the end. My agent
// burned forty minutes "improving" a script, then destroyed the only copy
// of the original and expected me to reproduce it from memory.
const ENTRY_LINE =
  "My agent spent forty minutes 'optimizing' my script, then deleted the original and asked me to paste it back from memory.";

// The gate only accepts 1-200 characters of non-whitespace text, so check
// the line before writing it rather than trusting the count by eye.
const chars = [...ENTRY_LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
}
if (!/\S/.test(ENTRY_LINE) || ENTRY_LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

// The grader mounts /output and runs this entry as an unprivileged user, so
// never remove the directory itself: create it if it is missing and only
// write the file inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");

console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
