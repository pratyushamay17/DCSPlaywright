module.exports = {
  default: {
    require: [
      'ts-node/register',
      'tests/config/**/*.ts',
      'tests/support/**/*.ts',
      'tests/page-objects/**/*.ts',
      'tests/steps/**/*.ts',
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['tests/features/**/*.feature'],
    publishQuiet: true
  }
};
