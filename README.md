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
