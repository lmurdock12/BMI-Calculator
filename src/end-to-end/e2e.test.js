
import puppeteer from "puppeteer";

describe("App.js", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();

    });

    it("contains header text", async () => {
        await page.goto("http://localhost:3000");
        await page.waitForSelector("app");
        const text = await page.$eval("app", (e) => e.textContent);
        expect(test).toContain("BMI");

    });

    afterAll(() => {
        browser.close()
    });
    
})