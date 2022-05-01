const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 1000;

Given ('that I see a list of products',async()=>{
    await browser.url('/');

});

When(/^I click on the product title "(.*)"$/, async (text) => {
    let singleProduct = await $('#i1 h3');
    await singleProduct.click();
    
  });

  Then(/^I see page with product "(.*)" details$/, async (text) => {
    
    await $('.backButton').waitForExist();
    expect(await $('#i1')).toHaveTextContaining(text);
    await browser.pause(pauseTime);
});