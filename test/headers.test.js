import { localize } from '@lion/localize';
import '../../locale/inline-data.js';
import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';



describe('loan-header', () => {
  // Write test cases inside this block
  it('passes accessibility test For EN', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const myval=await el.shadowRoot.querySelector('button');
    await expect(myval).to.be.accessible();
 });
 
  //test accessibility for NL
  it('passes accessibility test for NL', async () => {
    const el = await fixture(html` <loan-header></loan-header> `);
    const myval1= await el.shadowRoot.querySelectorAll('button');
   await expect(myval1).to.be.accessible();
  });

  
  it('checks for event handling on button en', async()=>{
    const el=await fixture(html`<loan-header></loan-header> `);
    await el.shadowRoot.querySelectorAll('button').click();
  });

  
  it('checks for event handling on button NL', async()=>{
    const el=await fixture(html`<loan-header></loan-header> `);
    await el.shadowRoot.querySelectorAll('button').click();
  
  });

  
 it('should pass convert language',async ()=>{
  const el = await fixture(html` <loan-header></loan-header> `);
  const myval1= await el.shadowRoot.querySelector('p').innerText;
  //console.log(el.shadowRoot.querySelector('p').innerText);
  expect(myval1).to.equal('Apply Loan');
 });
});
 