import { html, fixture, expect } from '@open-wc/testing';
import  Sinon  from 'sinon';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files

  
  it('checks for spy function',()=>{
    const el=fixture(html`<basic-details></basic-details>`);
    const myspy=Sinon.spy(el,'_toDashboard');
    form.click();
    expect(myspy.calledOnce).to.be.true;
      });
});
