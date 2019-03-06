// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
		junitReporter: {      
      outputDir: "../results",
      outputFile: "common.xml",
			useBrowserName: false,
			suite: 'VB Common'
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'cobertura' ],
      dir: require('path').join(__dirname, '../results/coverage'),
      fixWebpackSourcePaths: true
    },
    reporters: ['mocha', 'junit', 'coverage-istanbul' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
		browsers: ['ChromeNoSandbox'],
		customLaunchers: {
			ChromeNoSandbox: {
				base: 'Chrome',
				flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
			}
		}
  });
};
