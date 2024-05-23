// @ts-check

/**
 * @typedef Person
 * A single contributor with a /sells page.
 * @property {string} name - contributor's name
 * @property {string} description - tagline for contributor
 * @property {string} url - link to contributor's /uses page
 * @property {string} country - flag emoji for contributor's country
 * @property {string} [twitter] - optional Twitter username (beginning with `@`)
 * @property {string} [emoji] - some emoji corresponding to the contributor
 * @property {string[]} tags - list of tools or other tags the contributor uses
 */

/**
 * List of all contributors with /sells pages.
 * @type {Person[]}
 */
export const contributors = [
  {
    name: "Dimitrios Filippou",
    description: "I sell used hardware like cameras phones or batteries.",
    url: "https://jimfilippou.com/sells",
    twitter: "@thefrozenvortex",
    emoji: "🏋️",
    country: "🇬🇷",
    tags: ["cameras", "phones", "batteries"],
  },
];
