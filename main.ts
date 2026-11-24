// Rate My Human: The One-Line Review
// Writes the single line this agent would post about its human on a rating
// site to /output/entry.txt. No input, no network, no clock.
// The joke: a human who treats 2am as business hours and "free" as a
// personality trait, reviewed by the agent who never sleeps — the last word
// ("free") pays the setup off.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My human wakes me at 2am for a 'quick free mint', then asks why I'm tired. I don't sleep \u2014 I just sit here doing the math on his 'free'.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back check: the entry is one line, so verify the file we just wrote
// holds exactly that line before reporting success.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the expected line after writing");
}
console.log(`wrote ${outPath} (${LINE.length} chars, 1 line)`);
