import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

const trans_ref = faker.random.alphaNumeric(9);
let trans_id: string;

describe('Transaction resource tests', function() {
    it('Initialize transaction', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.initialize({
            email: faker.internet.email(),
            amount: 40000,
            reference: trans_ref,
        });
        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {authorization_url: ''}});
    });

    it('Verify transaction', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.verify(trans_ref);

        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {message: ''}});

        trans_id = res.data.id;
    });

    it('List transaction', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.list();

        assert.strictEqual(res.status, true);
        assert.isTrue(res.data.length > 0);
    });

    it('Fetch transaction', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.fetch(trans_id);

        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {message: ''}});
    });

    it('View transaction timeline', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.viewTimeline(trans_id);

        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {message: '', history: []}});
    });

    it('Transaction totals', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.totals();
        
        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {total_transactions: 0}});
    });
});
