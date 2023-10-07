const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
chromeWebSecurity: false,
//baseUrl: 'https://example.com',

projectId: "2jbg7z",
 "retries": {
   // Configure retry attempts for `cypress run`
   // Default is 0
   "runMode": 1,
   // Configure retry attempts for `cypress open`
   // Default is 0
   "openMode": 1
 },
 defaultCommandTimeout:5000,
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: '**/*.feature',
    excludeSpecPattern: '**/pages/*',
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
  }
  },
});
