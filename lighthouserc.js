module.exports = {
  ci: {
    collect: {
      url: ["https://www.github.com"],
      assert: {
        assertions: {
          "categories:performance": ["warn", { minScore: 0.1 }],
          "categories:accessibility": ["warn", { minScore: 0.1 }],
          "categories:seo": ["warn", { minScore: 0.1 }],
          "categories:best-practices": ["warn", { minScore: 0.1 }],
        },
      },
    },
    uploads: {
      target: "temporart-public-storage",
    },
  },
};
