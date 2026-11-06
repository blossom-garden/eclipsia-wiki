/**
 * @param {string} str - The input String
 * @returns {string} - PascalCase string
 */
module.exports = (str) =>
  str
    .normalize("NFKC")
    .replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
    .replace(/[-_\s]/g, "")
    .trim();
