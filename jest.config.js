
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
    ['<rootDir>/index', { command_handler }]
  ],
};
