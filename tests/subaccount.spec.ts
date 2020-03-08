import Paystack from '../index';
import {assert, expect} from 'chai';

let subaccount_id: string;

describe('Subaccount resource tests', function() {
    it('Create subaccount', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.subaccount.create({
            business_name: 'jonathan',
            settlement_bank: 'Access Bank',
            account_number: '0202348271',
            percentage_charge: 0.4,
        });

        subaccount_id = res.data.id;

        assert.strictEqual(res.status, true);
    });

    it('List subaccounts', async function() {
        const paystack = new Paystack(process.env.KEY as string);
        const res = await paystack.subaccount.list();

        assert.strictEqual(res.status, true);
        assert.isTrue(res.data.length > 0);
    });
});
