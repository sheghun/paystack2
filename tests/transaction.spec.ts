import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

describe('Transaction resource tests', function() {
    it('Initialize transaction', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.transaction.initialize({
            email: faker.internet.email(),
            amount: 40000,
            reference: faker.random.alphaNumeric(9),
        });
        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {authorization_url: ''}});
    });
});
