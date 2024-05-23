import { promises as fs } from "node:fs";

const { contributors } = await import("./index.mjs");

const readme = await fs.readFile("./README.md", "utf8");

let [token1, token2] = readme.split("<!-- contributors -->");
token2 = "";

contributors.forEach((contributor) => {
  token2 += `
- [${contributor.name}](${contributor.url}) ${contributor.emoji} ${contributor.description} ${contributor.country}
`;
});

await fs.writeFile("./README.md", `${token1}<!-- contributors -->\n${token2}`);
