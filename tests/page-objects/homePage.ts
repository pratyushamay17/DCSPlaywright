import type { Page } from "playwright";
import { Config } from "../config/config.ts";

export class HomePage  {
   

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateToHomepage()
    {
        await this.page.goto(Config.baseUrl);
    }

    async clickCheckOnlineButton() {
        // override to 10s for this click
        await this.page.getByRole('button', { name: 'Check online' }).click({ timeout: 10_000 });
    }

}