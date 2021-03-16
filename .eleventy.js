const del = require("del").sync;

module.exports = eleventyConfig => {
  // Clean the output directory.
  del("./www/");

  eleventyConfig.addPassthroughCopy("./static/");

  return {
    dir: {
      input: "src",
      output: "www"
    }
  }
};
