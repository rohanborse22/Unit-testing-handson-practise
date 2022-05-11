import { html, fixture, expect } from '@open-wc/testing';
 import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
 
  const el=await fixture(html`<loan-success></loan-success>`);
  const myspy=Sinon.spy(el,'_toHome');
   myspy();
  expect(myspy.called).to.be.true;
});

describe('error screen', () => {
  // Write test cases inside this block
  const el=await fixture(html`<loan-error></loan-error>`);
  const mispy=Sinon.spy(el,'_toHome');
  mispy();
  expect(mispy.called).to.be.true;
});
