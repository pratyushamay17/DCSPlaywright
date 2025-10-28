import {test, expect} from '@playwright/test';
import { HomePage } from './page-objects/homepage';
import { RevenueCalculatorPage } from './page-objects/revenueCalculatorPage';
import { config } from './config/config';

  
test('Vehicle Registration Calculation', async({ page }) => {
    const homePage = new HomePage(page);
    const revenueCalculatorPage = new RevenueCalculatorPage(page);

    await homePage.navigateToHomepage();
    await homePage.clickCheckOnlineButton();

    await revenueCalculatorPage.verifyRevenueCalculatorPageHeader();
    await revenueCalculatorPage.selectRegistrationRadioButton();
    await revenueCalculatorPage.enterPurchasePrice(config.purchase_price.toString());
    await revenueCalculatorPage.clickCalculateButton();
    await revenueCalculatorPage.verifycalculatorModalHeader();
    await revenueCalculatorPage.verifyRegistrationAmountDetails(config.duty_payable.toString(), config.purchase_price.toString());



});




