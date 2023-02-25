import { html, fixture, expect } from '@open-wc/testing';
import sinon, { spy } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const success = await fixture(html`<loan-success></loan-success>`)
const error = await fixture(html`<loan-error></loan-error>`)

describe('Success screen', () => {
    beforeEach(function () {
        sinon.restore();
    });

    it('Test call _toHome method when home button is clicked', async () => {
        const toHomeStub = sinon.stub(success, '_toHome');
        const homeBtn = success.shadowRoot.querySelector('.home-btn');
        success.requestUpdate();
        await success.updateComplete;
        homeBtn.click();
        expect(toHomeStub).to.have.callCount(1);
    })
});

describe('Error screen', () => {
    beforeEach(function () {
        sinon.restore();
    });

    it('Test call _toHome method when home button is clicked', async () => {
        const toHomeStub = sinon.stub(error, '_toHome');
        const homeBtn = error.shadowRoot.querySelector('.home-btn');
        error.requestUpdate();
        await error.updateComplete;
        homeBtn.click();
        expect(toHomeStub).to.have.callCount(1);
    })
});