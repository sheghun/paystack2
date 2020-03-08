import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

let customer_code: string;

describe('Customer resource tests', function() {
    it('List customers', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.customer.list();

        customer_code = res.data[0].customer_code;

        assert.strictEqual(res.status, true);
        assert.isTrue(res.data.length > 0);
    });

    it('Fetch customers', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.customer.fetch(customer_code);

        assert.strictEqual(res.status, true);
        assert.containsAllDeepKeys(res, {data: {customer_code: ''}});
    });
});
