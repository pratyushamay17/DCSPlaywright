import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { HomePage } from '../page-objects/homePage.ts';
import { RevenueCalculatorPage } from '../page-objects/revenueCalculatorPage.ts';
import { chromium } from 'playwright';
import type { Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;
let homePage: HomePage;
let revenueCalculatorPage: RevenueCalculatorPage;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  homePage = new HomePage(page);
  revenueCalculatorPage = new RevenueCalculatorPage(page);
});

After(async () => {
  if (browser) await browser.close();
});

Given('I am on the homepage', async () => {
  // page/homePage already created in Before
  await homePage.navigateToHomepage();
});

When('I click on the {string} button', async (buttonName: string) => {
  if (buttonName === 'Check Online') {
    await homePage.clickCheckOnlineButton();
  } else if (buttonName === 'Calculate') {
    await revenueCalculatorPage.clickCalculateButton();
  } else {
    throw new Error(`Unknown button label: ${buttonName}`);
  }
});

Then('I should be navigated to the Revenue Calculator page', async () => {
  await revenueCalculatorPage.verifyRevenueCalculatorPageHeader();
});

When('I select the Registration radio button', async () => {
  await revenueCalculatorPage.selectRegistrationRadioButton();
});

When('I enter the purchase price {string}', async (price: string) => {
  await revenueCalculatorPage.enterPurchasePrice(price);
});

Then('I should see the calculator modal header', async () => {
  await revenueCalculatorPage.verifycalculatorModalHeader();
});

Then(
  'I should see the registration amount details showing duty payable {string} for purchase price {string}',
  async (duty_payable: string, purchase_price: string) => {
    await revenueCalculatorPage.verifyRegistrationAmountDetails(duty_payable, purchase_price);
  }
);
