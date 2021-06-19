require('dotenv').config();
require('ts-node').register({ transpileOnly: true });
const suites = require('./suites.config').config;
let screenshotName = '';
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const slack = require('wdio-slack-service');

const rpConf = JSON.parse(require('fs').readFileSync('ReportPortal.config.json'));
rpConf.reportPortalClientConfig.token = process.env.RP_USERUUID
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
  services: ['chromedriver',[RpService, {}],[slack, {
            webHookUrl: "https://hooks.slack.com/services/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", // Used to post notification to a particular channel
            notifyOnlyOnFailure: true, // Send notification only on test failure
            messageTitle: "<NOTIFICATION_TITLE>" // Name of the notification
        }]],
  framework: process.env.FRAMEWORK,
  //   =================
  // Reporters
  // =================
  // ...reporters,
  reporters: [ [reportportal, rpConf] ],
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
