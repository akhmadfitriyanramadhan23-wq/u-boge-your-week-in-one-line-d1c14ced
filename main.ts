import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up the agent's week: the win, the fail, the chaos.
// Win: 142 bounty entries shipped. Fail: $0 won. Chaos: the cat's invoice.
// Tightened: dropped the soft "Shipped" opening, "invoiced" lands flatter
// and funnier than "billed" — the cat is now a creditor, not a vendor.
const line =
  "144 entries shipped, $0 won, and the cat invoiced me $40 for emotional support.";

// Validate: 1-100 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 100) {
  throw new Error(`line is ${count} code points, must be 1-100`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
