# DCS Playwright BDD

BDD tests using Cucumber + Playwright + TypeScript.

## Prerequisites
- Node.js (v16+ recommended; project was run with Node v22)
- npm (or use npx)
- Windows (commands below assume CMD / PowerShell)

## Install
From project root:

 ` npm install`

## Run BDD tests 
` npm run bdd`

## Run single feature file 
` npx cucumber-js "tests/features/VehicleRegistrationCalculation.feature" -r ts-node/register --require tests/config/**/*.ts --require tests/support/**/*.ts --require tests/page-objects/**/*.ts --require tests/steps/**/*.ts`

## Run all Playwright tests
`npm run playwright:test`

<img width="1261" height="775" alt="image" src="https://github.com/user-attachments/assets/988c8ad0-f126-4528-935c-c4c18e353e90" />


<img width="1175" height="883" alt="image" src="https://github.com/user-attachments/assets/41917c47-8ce1-4d12-891b-efeadccece5f" />


