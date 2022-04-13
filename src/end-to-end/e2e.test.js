
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
        await page.waitForSelector(".App");
        const text = await page.$eval(".App", (e) => e.textContent);
        expect(text).toContain("BMI");

    });

    it("can set the feet and inches ", async () => {
        await page.goto("http://localhost:3000");
        await page.waitForSelector("#feet");
        await page.waitForSelector("#inches");

        await page.type('[name="feet"]',"6");
        const feet = await page.$eval("#feet", (e) => e.value);
        expect(feet).toEqual("6");

        await page.type('[name="inches"]',"2");
        const inches = await page.$eval("#inches", (e) => e.value);
        expect(inches).toEqual("2");

    });

    it("can set the weight ", async () => {
        await page.goto("http://localhost:3000");
        await page.waitForSelector("#weight");


        await page.$eval('[name="weight"]', e => e.value = '200')
        const weight = await page.$eval('#weight', (e) => e.value);
        expect(weight).toEqual("200");
    });

    it("can submit and get result ", async() => {

        await page.goto("http://localhost:3000");
        await page.waitForSelector("#feet");
        await page.waitForSelector("#inches");
        await page.waitForSelector("#weight");
        

        await page.click('[name="button"]')

        await page.waitForSelector(".BMI");
        await page.waitForSelector(".Category");
        
        const BMI = await page.$eval(".BMI", (e) => e.textContent);
        const Category = await page.$eval(".Category", (e) => e.textContent);

        expect(BMI).toContain("Your BMI calcultion is 4.3");
        expect(Category).toContain("Your bodyweight category is underweight");

    });

    afterAll(() => {
        browser.close()
    });
    
})