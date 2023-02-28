import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';

let element;
describe('LoanApplication', () => {

  beforeEach(async () => {
    element = await fixture(html`<loan-application></loan-application>`);
  });

  // Test loan-application is render
  it('should check loan-application is render', async () => {
    expect(element).to.be.accessible();
  });
});