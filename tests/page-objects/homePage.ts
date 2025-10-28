import { Page } from "@playwright/test";
import { config } from "../config/config";

export class HomePage  {
   

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateToHomepage()
    {
        await this.page.goto(config.baseUrl);
    }

    async clickCheckOnlineButton()
    {
        await this.page.getByRole('button', { name: 'Check online' }).click();
    }

}