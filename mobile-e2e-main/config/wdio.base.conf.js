require('dotenv').config();
require('ts-node').register({ transpileOnly: true });
const suites = require('./suites.config').config;
let screenshotName = '';
exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: process.env.RUNNER,
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/**/*.ts'],
  // The number of times to retry the entire specfile when it fails as a whole
  specFileRetries: 2,
  // ==============
  // Suites config file
  // ==============
  ...suites,
  // Patterns to exclude.
  // ============
  // Capabilities
  // ============
  maxInstances: 10,

  // ===================
  // Test Configurations
  // ===================
  logLevel: process.env.LOG_LEVEL_WARN,

  bail: 0,

  baseUrl: process.env.BASE_URL,

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: process.env.FRAMEWORK,
  //   =================
  // Reporters
  // =================
  // ...reporters,

  // reporters: [
  //   [
  //     'junit',
  //     {
  //       outputDir: 'screenshots',
  //       suiteNameFormat: '/[^a-z0-9]+/',
  //       outputFileFormat: function (options) {
  //         return `results-${options.cid}.xml`;
  //       },
  //     },
  //   ],
  // ],
  // Options to be passed to Mocha.
  mochaOpts: {
    ui: 'bdd',
    compilers: ['tsconfig-paths/register'],
    timeout: 120000,
  },
  // =====
  // Hooks
  // =====
  before: function (capabilities, specs) {
    // require('ts-node').register({ files: true });
  },

  beforeSuite: function (suite) {
    browser.maximizeWindow();
    browser.url(this.baseUrl);
    // Set Cookies
    // Get Cookies and Display them;
  },

  // after: function (result, capabilities, specs) {
  //   browser.saveScreenshot(`./screenshots/${screenshotName}.png`);
  // },
};