const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 60000;

// browser.url - navigate to a page/url
// browser.pause - pause execution for a number of ms
// $ - grab an element
// element: click, setValue

Given('I should see that I logged in and can see the logout button', async () => {
    await browser.url('/');
    await browser.pause(pauseTime);
});


When('I click on logout button', async () => {
    let logout_button = await browser.$('.logout');
    await logout_button.click();
    await browser.pause(pauseTime);
});

Then('I should be successfully loged out', async () => {
    await browser.url('/');
    browser.pause(pauseTime)
}); 