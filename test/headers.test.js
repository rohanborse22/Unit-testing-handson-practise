import { html, fixture, expect } from '@open-wc/testing';
import '../src/header/Header.js';
import Sinon from 'sinon';

let element;
let button;
describe('loan-header', () => {
  beforeEach(async () => {
    element = await fixture(html`<loan-header></loan-header>`);
    button = await element.shadowRoot.querySelectorAll('button');
  });

  it('Test header is render', () => {
    expect(element).to.be.accessible();
  });

  xit('Test en-GB button is accessible', () => {
    expect(button[0]).to.be.accessible();
  });

  xit('Test nl-NL is render', () => {
    expect(button[1]).to.be.accessible();
  });

  it('Test form class form basic', async () => {
    const div = element.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });

  it('Test for the language change', async () => {
    const func = Sinon.spy(element, 'localeChanged');
    button[0].click();
    expect(func.calledOnce);
    func.restore();
  });

  it('check for the color change of button', async () => {
    button[0].click();
    expect(button[0]).to.have.class('bg-btn-color');
  });

  it('check for the color change of button', async () => {
    button[0].click();
    expect(button[1]).to.have.class('btn-cursor');
  });

  it('check for the color change of button', async () => {
    button[1].click();
    expect(button[1]).to.have.class('bg-btn-color');
  });
});