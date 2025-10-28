import { expect, Page } from "@playwright/test";
import { config } from "../config/config";

export class RevenueCalculatorPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async verifyRevenueCalculatorPageHeader()
    {
        await expect(this.page.locator('h1#skip')).toHaveText('Revenue NSW calculators');
    }

    async selectRegistrationRadioButton()
    {
        const optionYes = this.page.locator('div#passenger input#passenger_Y'); 
        await optionYes.check({ force: true });     

    }

    async enterPurchasePrice(purchase_price: string)
    {
        await this.page.getByLabel('Purchase price').fill(purchase_price.toString());
    }

    async clickCalculateButton()
    {
        await this.page.getByRole('button', { name: 'Calculate' }).click();
    }

    async verifycalculatorModalHeader()
    {
        await expect(this.page.locator('div.modal-body h4')).toHaveText('Motor vehicle registration');
    }

    async verifyRegistrationAmountDetails(duty_payable: string, purchase_price: string)
    {
        await expect(this.page.locator('table.TableApp tbody tr').first()).toHaveText('Details entered:');
        await expect(this.page.locator('table.TableApp tbody tr').nth(1).locator('td').nth(0)).toHaveText('Is this registration for a passenger vehicle?');
        await expect(this.page.locator('table.TableApp tbody tr').nth(1).locator('td').nth(1)).toHaveText('Yes');
        await expect(this.page.locator('table.TableApp tbody tr').nth(2).locator('td').nth(0)).toHaveText('Purchase price or value');
        const purchasePrice = await this.page.locator('table.TableApp tbody tr').nth(2).locator('td').nth(1).textContent().then((textContent) => textContent?.replace(/,/g, ''));
        await expect(purchasePrice).toContain('$' + purchase_price + '.00');
        await expect(this.page.locator('table.TableApp td.focus.bold').last()).toHaveText('Result:');
        await expect(this.page.locator('table.TableApp tbody tr').nth(4).locator('td').nth(0)).toHaveText('Duty payable');
        const dutyPayable = await this.page.locator('table.TableApp tbody tr').nth(4).locator('td').nth(1).textContent().then((textContent) => textContent?.replace(/,/g, ''));
        await expect(dutyPayable).toContain('$' + duty_payable + '.00');
        await expect(this.page.locator('div.modal-body p').first()).toHaveText('Note: All amounts are in Australian dollars. ');
        await expect(this.page.locator('div.modal-body p').last()).toHaveText('If you need help using this calculator, contact us.');
        await this.page.locator('.modal-footer button').click();

    }
}
