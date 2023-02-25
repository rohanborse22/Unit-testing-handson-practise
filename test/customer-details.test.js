import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';
import { localize } from '@lion/localize';

let el;
let button;

describe('Customer details', () => {
  before(async () => {
    el = await fixture(html`<customer-details></customer-details>`);
    button = el.shadowRoot.querySelectorAll('lion-button');
  });

  it('Check for accessibility', () => {
    expect(el).to.be.accessible;
  });

  it('Spy the toEmidetails method', () => {
    const func = Sinon.spy(el, '_toEmidetails');
    button[0].click();
    expect(func.calledOnce);
  });

  it('Should contain valid characters in FirstName', async () => {
    const element = await fixture(
      html`<lion-input label="${localize.msg('change-language:firstname')}"></lion-input>`
    );

    await expect(element.label).to.match(/^[a-zA-Z\s]*$/);
  });

  it('Check for submithandler', async () => {
    await el.shadowRoot.querySelector('lion-button').click();
    await el.updateComplete;
  });

  it('can instantiate an element', async () => {
    const el = await fixture('<div class="container"></div>');
    expect(el.getAttribute('class')).to.equal('container');
  });

  it('can semantically compare full dom trees', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).dom.to.equal('<div class="container"><h2></h2></div>');
  });

  it('can semantically compare lightDom trees', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).lightDom.to.equal('<h2></h2>');
  });

  xit('can compare against a snapshot', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    await expect(el).lightDom.to.equalSnapshot();
  });

  it('can check for an exiting css class', async () => {
    const el = await fixture(`<div class="container"><h2></h2></div>`);
    expect(el).to.have.class('container');
  });

  it('works', async () => {
    expect(el).to.be.accessible();
  });

  it('should render title', async () => {
    const h2 = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
  });
  
});