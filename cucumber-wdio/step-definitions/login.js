const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 60000;

// browser.url - navigate to a page/url
// browser.pause - pause execution for a number of ms
// $ - grab an element
// element: click, setValue

Given('that I should be able to see the login page', async () => {
    await browser.url('/');
    browser.pause(pauseTime)
});

When('I click the login button', async () => {
    let login_button = await $('.login');
    await login_button.click();
    browser.pause(pauseTime)
});
When('I should see the Login page', async () => {
    let login_page = await $('.loginModal');
    await login_page.waitForDisplayed(pauseTime);
    browser.pause(pauseTime)
});

When(/^I fill in the page with "(.*)" and "(.*)"$/, async (email, password) => {
    let email_login = await $('form[name="login"] input[name="email"]');
    let password_login = await $('form[name="login"] input[name="password"]');
    await email_login.setValue(email);
    await email_login.waitForDisplayed(pauseTime);
    await password_login.setValue(password);
    await password_login.waitForDisplayed(pauseTime);
    browser.pause(pauseTime)
});
When('I click on login button', async () => {
    let login_button = await $('form[name="login"] button[name="login"]');
    await login_button.waitForDisplayed(pauseTime);
    await login_button.click();
    browser.pause(pauseTime)
    await browser.url('/');
});

Then('I should be able to see logout button', async () => {
    let logout_button = await $('.navButtons .logout');
    await logout_button.waitForDisplayed(pauseTime);
    browser.pause(pauseTime)
    await browser.url('/');
});