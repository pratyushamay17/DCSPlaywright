# NSWDCSProject
This project is developed in playwright using javascript

Steps to clone and run tests:

Install Visual Studio Code on the windows/IOS machine

Clone the git repository from - https://github.com/pratyushamay17/DCSPlaywright.git

Install playwright using command - npm init playwright@latest

Follow the instructions when prompted

Do you want to use TypeScript or JavaScript? · TypeScript

Where to put your end-to-end tests? · tests

Add a GitHub Actions workflow? (Y/n) · true

Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

Playwright will be installed successfully

Inside that directory, you can run several commands:

  npx playwright test
    > Runs the end-to-end tests.

  npx playwright test --ui
    > Starts the interactive UI mode.

  npx playwright test --project=chromium
    > Runs the tests only on Desktop Chrome.

  npx playwright test --debug
    > Runs the tests in debug mode.

  npx playwright codegen
    > Auto generate tests with Codegen.

  npx playwright test testfile.spec.js
    > Runs the tests from specific file


