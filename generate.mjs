import { promises as fs } from "node:fs";

// Import the contributors from the index file.
const { contributors } = await import("./index.mjs");

// Read the README file.
const readme = await fs.readFile("./README.md", "utf8");

// Split the README file into two parts: before and after the contributors section.
let [token1, token2] = readme.split("<!-- contributors -->");
token2 = "";

// Add the contributors to the README file.
contributors.forEach((contributor) => {
  token2 += `
- [${contributor.name}](${contributor.url}) ${contributor.emoji} ${contributor.description} ${contributor.country}
`;
});

// Write the updated README file.
await fs.writeFile("./README.md", `${token1}<!-- contributors -->\n${token2}`);
