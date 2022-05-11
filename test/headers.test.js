import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

import { localize } from '@lion/localize';
import '../../locale/inline-data.js';


describe('loan-header', () => {
  // Write test cases inside this block
  it('passes accessibility test For EN', async () => {
    const el = await fixture(html` <button>EN</button> `);
    await expect(el).to.be.accessible();
 });
 
  //test accessibility for NL
  it('passes accessibility test for NL', async () => {
    const el = await fixture(html` <button>NL</button> `);
   await expect(el).to.be.accessible();
  });
});
 