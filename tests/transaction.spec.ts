/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

const trans_ref: string = faker.random.alphaNumeric(9);
let trans_id: string;

describe('Transaction resource tests', () => {
    // Init transaction
    it('Initialize transaction', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.initialize({
                email: faker.internet.email(),
                amount: faker.random.number(),
                reference: trans_ref,
            });
            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {authorization_url: ''}});
            expect(res).to.have.property('data');
            expect(res.data).to.have.property('authorizaton_url');
            expect(res.data).to.have.property('access_code');
            expect(res.data).to.have.property('reference');
        } catch (error) {
            return error;
        }
    });

    // Verify transaction
    it('Verify transaction', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.verify(trans_ref);

            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {message: ''}});
            expect(res).to.have.property('data');
            expect(res.data).to.have.property('reference');
            expect(res.data).to.have.property('status');
            trans_id = res.data.id;
        } catch (error) {
            return error;
        }
    });

    // List transactions
    it('List transaction', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.list();

            assert.strictEqual(res.status, true);
            assert.isTrue(res.data.length > 0);
            expect(res).to.have.property('data');
            expect(res.data).to.be.instanceof(Array);
        } catch (error) {
            return error;
        }
    });

    // Fetch transactions
    it('Fetch transaction', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.fetch(trans_id);

            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {message: ''}});
            expect(res).to.have.property('data');
            expect(res.data).to.have.property('status');
        } catch (error) {
            return error;
        }
    });

    // Vuew transaction timeline
    it('View transaction timeline', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.viewTimeline(trans_id);

            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {message: '', history: []}});
        } catch (error) {
            return error;
        }
    });

    // Transaction totals
    it('Transaction totals', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.transaction.totals({
                from: faker.date.past(),
                to: faker.date.future(),
            });

            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {total_transactions: 0}});
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });
});
