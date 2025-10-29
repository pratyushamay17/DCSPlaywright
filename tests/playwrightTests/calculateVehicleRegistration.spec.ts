import {test, expect} from '@playwright/test';
import { HomePage } from './page-objects/homePage.ts';
import { RevenueCalculatorPage } from './page-objects/revenueCalculatorPage.ts';
import { Config } from './config/config.ts';

  
test('Vehicle Registration Calculation', async({ page }) => {
    const homePage = new HomePage(page);
    const revenueCalculatorPage = new RevenueCalculatorPage(page);

    await homePage.navigateToHomepage();
    await homePage.clickCheckOnlineButton();

    await revenueCalculatorPage.verifyRevenueCalculatorPageHeader();
    await revenueCalculatorPage.selectRegistrationRadioButton();
    await revenueCalculatorPage.enterPurchasePrice(Config.purchase_price.toString());
    await revenueCalculatorPage.clickCalculateButton();
    await revenueCalculatorPage.verifycalculatorModalHeader();
    await revenueCalculatorPage.verifyRegistrationAmountDetails(Config.duty_payable.toString(), Config.purchase_price.toString());



});




