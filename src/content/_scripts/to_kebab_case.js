/**
 *
 * @param {string} str - The input String
 * @returns {string} - Kebab case string
 */
module.exports = (str) =>
  str
    .normalize("NFKC")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2$3")
    .toLowerCase()
    .replace(/[<>:"/\\|?*]/g, "-")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
