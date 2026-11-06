/**
 * @argument {unknown} tp - The Templater manager object
 * @returns {Promise<string>} - Kebab case string
 */
module.exports = async (tp) =>
  tp.file.title !== "Untitled" ? tp.file.title : await tp.system.prompt("Please enter a title");
