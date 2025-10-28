# NSWDCSProject
This project is developed in playwright using javascript

> Steps to clone and run tests:

1. Install Visual Studio Code on the windows/IOS machine

2. Clone the git repository from - https://github.com/pratyushamay17/DCSPlaywright.git

3. Install playwright using command - npm init playwright@latest

4. Follow the instructions when prompted

			Do you want to use TypeScript or JavaScript? · TypeScript
			Where to put your end-to-end tests? · tests
			Add a GitHub Actions workflow? (Y/n) · true
			Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

     Playwright will be installed successfully

5. Inside that directory, you can run several commands:

Runs the end-to-end tests. 
  		>	npx playwright test

Starts the interactive UI mode.
			> npx playwright test --ui
  		
Runs the tests only on Desktop Chrome.
		>	npx playwright test --project=chromium
  		
Runs the tests in debug mode.
		>	npx playwright test --debug
  		
Auto generate tests with Codegen.
		>	npx playwright codegen
  		
Runs the tests from specific file
		>	npx playwright test testfile.spec.js

