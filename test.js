require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('NEW USER REGISTRATION', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Steps for the test

    it('loads the page', async function() {
        await driver.get('https://www.blockchain.com/');
    });

    it('finds sign up button and click on it',async function() {
        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[1]/div[2]/div/div[4]/div/a[2]/button')), 10000);
        await driver.findElement(By.xpath('/html/body/div/div/div[1]/div[2]/div/div[4]/div/a[2]/button')).click();
    });

    it('finds and fills in the email field',async function() {
        await driver.wait(until.elementLocated(By.name('email')), 10000);
        await driver.findElement(By.name('email')).sendKeys('4test@ttt.com');
    });

    it('finds and fills in the password field',async function() {
        await driver.findElement(By.name('password')).sendKeys('passw123')
    });

    it('finds and fills in the password confirmation field',async function() {
        await driver.findElement(By.name('confirmationPassword')).sendKeys('passw123');
    });

    it('finds create wallet button and clicks on it',async function() {
        await driver.findElement(By.xpath('/html/body/div/div/div[3]/div/div[2]/div[1]/div/form/button')).click();
    });

    it('waits for side panel to appear and then click skip button',async function() {
        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div/div/div/div/span/div/div[1]/div/span')), 10000);
        await driver.findElement(By.xpath('/html/body/div/div/div[3]/div/div/div/div/div/span/div/div[3]/button[2]')).click()
    });

    it('get the title value and verify it', async function() {

        let title = await driver.getTitle();
        assert.strictEqual(title, 'Blockchain.com Wallet - Exchange Cryptocurrency');
    });
    after(() => driver && driver.quit());
})