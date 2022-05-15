const { expect } = require('@jest/globals');

require('./fakeDOM.js');

const { listen } = require('../frontend/helpers');

global.listen = listen; // make listen available for all other script files


const Product = require('../frontend/Product.js');

const { render, renderInList, addEventListeners } = require('../frontend/Product.js');


describe('Test the Product class', () => {

  test('Creation of a Product', () => {

    let myProduct = new Product(1, 'Broom stick', 200, 'A good broom stick.');

    // Check that the constructor really sets the correct property values
    expect(myProduct.id).toBe(1);
    expect(myProduct.name).toBe('Broom stick');
    expect(myProduct.price).toBe(200);
    expect(myProduct.description).toBe('A good broom stick.');

  });

  test('Creation of a New  Product', () => {

    let myProduct = new Product(4, 'Age of empires', 129, `RTS`);

    // Check that the constructor really sets the correct property values and myproduct propery matches with product from database product.
    expect(myProduct.id).toBe(4);
    expect(myProduct.name).toBe('Age of empires');
    expect(myProduct.price).toBe(129);
    expect(myProduct.description).toBe(`RTS`);

  });


  test('An id not equal to a number should fail for Product constructor', () => {

    expect(() => {
      new Product('xa', 'X', 200, 'description');
    }).toThrow();

    expect(() => {
      new Product(true, 'X', 200, 'description');
    }).toThrow();

  })

  test('A name  not equal to a string  should fail for Product constructor', () => {

    expect(() => {
      new Product(1, 22222222, 200, 'description');
    }).toThrow();

    expect(() => {
      new Product(2, true, 200, 'description');
    }).toThrow();

  })
});


describe('Checking the products propertise', () => {

  test('Name is Age of empires ', () => {
    const name = 'Age of empires';
    expect(name).toBe('Age of empires');
  });

  test('Id is 4', () => {
    const id = 4;
    expect(id).toBe(4);
  });

  test('Age of empires', () => {
    const description = `RTS`;
    expect(description).toBe(`RTS`);
  });

  test('Price is 129', () => {
    const price = 129;
    expect(price).toBe(129);
  });

});
  