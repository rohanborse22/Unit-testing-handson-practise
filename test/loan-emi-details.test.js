import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { localize } from '@lion/localize';
import '../../locale/inline-data.js';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', () => {
  // Write test cases inside this block


  
it('checks for method',async ()=>{
  const el= await fixture(html `<loanemi-details></loanemi-details>`);
  const myspy=Sinon.spy(el,'_toBasicDetails')
  const myval=el.shadowRoot.querySelector('lion-button')[0]
  myval.click();
  expect(myspy.called).to.be.true;
  });
  // it('should navigate to customer page is working ',async()=>{
  //   const el = await fixture(html` <loanemi-details></loanemi-details>`);
  //  await el.shadowRoot.querySelector('.continue-btn').click();
  // });
  it('checks all the methods',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    const fun=await Sinon.spy(el,'super');
    await el.constructor();
    await expect(fun.calledOnce).to.be.false;
  });

  it('checks for the accessibility',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.be.accessible();
    //document.querySelector('.emi-details').should.contain.html('<p>Interest Rate</p>');  
  });

  
  it('checks for button click for navigation to next ',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    let btn=el.shadowRoot.querySelector('lion-button');
    const myspy=Sinon.spy(el,'_toCustomer');
    btn[1].click();
    //document.querySelector('.emi-details').should.contain.html('<p>Interest Rate</p>');  
  });

  
  
  it('checks for button click for navigation-back ',async()=>{
    const el=await fixture(html`<loanemi-details></loanemi-details>`);
    let btn1=el.shadowRoot.querySelector('lion-button');
    const myspy=Sinon.spy(el,'_toBasicDetails');
    btn1[0].click();
    //document.querySelector('.emi-details').should.contain.html('<p>Interest Rate</p>');  
  });
  
  
});
