let defaults = require("./config/wdio.base.conf.js").config; // inherits base config file
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const rpConf = JSON.parse(require('fs').readFileSync('ReportPortal.config.json'));
rpConf.reportPortalClientConfig.token = process.env.RP_USERUUID
let _ = require("lodash");
let overrides = {
  // Here are 'local config' specific overrides:
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          '--headless',
          '--disable-dev-shm-usage', // Force Chrome to use the /tmp directory instead. This may slow down the execution though.
          '--disable-gpu',
          '--no-sandbox',
          // '--window-size=1920,1080',
        ],
      },
      
    },
  ],
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);
