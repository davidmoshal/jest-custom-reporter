
// basically these are sagas, and need a command handler!

const command_handler = {
  handle(x) {
    console.log("handling:", x)
  }
}

module.exports = {
  testMatch: [
    '**/?(*.|*-)(spec|test).js?(x)',
  ],
  reporters: [
    'default',
    ['<rootDir>/index', {
      command_handler
    }],
    ["./node_modules/jest-html-reporter", {
      pageTitle: "Test Report"
    }],
    // ["jest-html-reporters", {
    //   "publicPath": "./html-report",
    //   "filename": "report.html",
    //   "expand": true
    //}]
  ],
};
