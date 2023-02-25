import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { Required, MinNumber, MaxNumber } from '@lion/form-core';

const element = await fixture(html`<basic-details></basic-details>`);
const myFuctionStub = Sinon.stub(element, '_captureDetails');

describe('Basic details', () => {
  
  // Test Initial - Web accessebility
  it('Checking for web accessebility', () => {
    expect(element).to.be.exist;
  });

  describe('Form Validation', () => {

    // Test empty validation
    it('Checking for empty validation', () => {
      const amount = new Required();
      const errorMessage = amount._getMessage();
      expect(errorMessage).to.not.equal();
    });

    // Test MinNumber Validation
    it('Checking for Min amount validation', () => {
      const amount = new MinNumber();
      const errorMessage = amount._getMessage();
      expect(errorMessage).to.not.equal(1);
    });

    // Test MaxNumber Validation
    it('Checking for Max amount validation', () => {
      const amount = new MaxNumber();
      const errorMessage = amount._getMessage();
      expect(errorMessage).to.not.equal();
    });

  });

  // Test for capturedetails
  it('Check for capturedetails', async () => {
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector('lion-button').click();
    expect(myFuctionStub).to.have.callCount(0);
  });

  // Test captureDetails when clicked
  it('Checking captureDetails when clicked', async () => {
    setTimeout(async () => {
      const el = await fixture(html`<basic-details></basic-details>`);
      const spy = sinon.spy(el._captureDetails);
      el.requestUpdate();
      await el.updateComplete;
      el.shadowRoot.getElementById('lion-btn').click();
      expect(spy.called).to.be.true;
    }, 2000);
  });

  // Test toDashBoard when clicked
  it('Checking toDashBoard when clicked', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const myFunctionStub = Sinon.stub(el, '_toDashboard');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('lion-button').click();
    expect(myFunctionStub).to.have.callCount(1);
  });

  // Test Checking for DOM
  it('Checking for DOM', async () => {
    const el = await fixture(`<basic-details><div id="word"></div></basic-details>`);
    expect(el).dom.to.equal('<basic-details><div id="word"></div></basic-details>');
  });
  
});
