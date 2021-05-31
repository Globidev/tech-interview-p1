import { readFileSync } from "fs";

function main() {
  const [fileName] = process.argv.slice(2);

  if (!fileName) {
    console.error("Missing argument for file input");
    process.exit(-1);
  }

  let input;
  try {
    input = readFileSync(fileName);
  } catch (error) {
    console.error(`Failed to open input file: ${error}`);
    process.exit(-1);
  }

  const answer = solve(input.toString());
  console.log(`CPU escaped after ${answer} steps`);
}

function solve(input: string): number {
  return 0;
}

main();
