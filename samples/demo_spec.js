Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.config('defaultCommandTimeout', 15000)

const random = () => { return Math.round(Math.random() * 10000) }

const baseUrl = 'http://localhost:8080/signup';
const postcode = 'sw170hb';
const email = 'testemail@testemail.com';
const password = 'aaaaaaaaaaaa';

const signup = (email, password, postcode) => {
  cy.get('a#ccc-notify-accept').scrollIntoView().click({ force: true });
  cy.get('a.signup-screen__a').scrollIntoView().click({ force: true });
  cy.get('input#Vegan').scrollIntoView().click({ force: true });
  cy.get('a.button').scrollIntoView().click({ force: true });
  cy.get('input.delivery__input').scrollIntoView().click({ force: true });
  cy.get('input.delivery__input').then(($el, text = postcode) => { cy.wrap($el).clear().type(text).should('have.value', text); });
  cy.get('a.delivery__submit').scrollIntoView().click({ force: true });
  cy.get('select.address__select').scrollIntoView().then(($el, value = '{"HouseNumber":"12","Street":"Waterside Way","Locality":"[Wimbledon Park]","Town":"London","County":"","Postcode":"SW17 0HB","GridE":52635,"GridN":17122}') => { cy.wrap($el).select(value).should('have.value', value); });
  cy.get('a.signup-screen__a').scrollIntoView().click({ force: true });
  cy.get('a.signup-screen__a').scrollIntoView().click({ force: true });
  cy.get('input[name="Email"]').scrollIntoView().click({ force: true });
  cy.get('input[name="Email"]').then(($el, text = email) => { cy.wrap($el).clear().type(text).should('have.value', text); });
  cy.get('input[type="password"]').scrollIntoView().click({ force: true });
  cy.get('input[type="password"]').then(($el, text = password) => { cy.wrap($el).clear().type(text).should('have.value', text); });
  cy.get('select.sources__select').scrollIntoView().then(($el, value = '{"Canvasser":"Other","SourceRequired":true,"LabelText":"Please let us know more details:*","SourceId":13}') => { cy.wrap($el).select(value).should('have.value', value); });
  cy.get('input[name="Source"]').scrollIntoView().click({ force: true });
  cy.get('input[name="Source"]').then(($el, text = 'other details') => { cy.wrap($el).clear().type(text).should('have.value', text); });
  cy.get('input[id="No thank you, I don\'t want to receive offers and recipes"]').scrollIntoView().click({ force: true });
  cy.get('a.signup-screen__a').scrollIntoView().click({ force: true });
  cy.get('a.signup-screen__a').scrollIntoView().click({ force: true });
  cy.url().should('eq', "http://localhost:8080/startmyshop");
  cy.get('span.my-account-link.menu-item.icon-account').scrollIntoView().should(($el) => { expect($el).to.contain('My account') });
  cy.get('div#BasketTotal').scrollIntoView().should(($el) => { expect($el).to.contain('£0.00') });
  cy.get('span.delivery.hide-sticky').scrollIntoView().should(($el) => { expect($el).to.contain('£0.00') });
  cy.get('span[data-num="2230"] > span.add.cta-a').scrollIntoView().click({ force: true });
  cy.get('span[data-num="5178"] > span.add.cta-a').scrollIntoView().click({ force: true });
  cy.get('li[data-price="3.55"]').scrollIntoView().click({ force: true });
  cy.get('span[data-num="1893"] > span.add.cta-a').scrollIntoView().click({ force: true });
  cy.get('span[data-num="1893"]').within(() => { cy.get('span.add-sign.plus').scrollIntoView().click({ force: true }); })
  cy.get('div#BasketCount').scrollIntoView().should(($el) => { expect($el).to.contain('4') });
  cy.get('div#BasketTotal').scrollIntoView().should(($el) => { expect($el).to.contain('£7.35') });
  cy.get('div#BasketCount').scrollIntoView().click({ force: true });
  cy.url().should('eq', "http://localhost:8080/basket");
  cy.get('span.delivery-fee-value').scrollIntoView().should(($el) => { expect($el).to.contain('£0.00') });
  cy.get('span.total-price-value.total').scrollIntoView().should(($el) => { expect($el).to.contain('£7.35') });
}

describe('demo', function () {
  it.only('signs up and adds products to basket', function () {
    cy.visit(baseUrl);
    signup("testemail@emailemail.com", "dsfdsfgsdfdfdsfdsfdsfds", "sw170hb")
  })
})