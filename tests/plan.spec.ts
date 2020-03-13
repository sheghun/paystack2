/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

describe('Paystack Plan', function() {
    let id_or_plan_code: string;

    // Create plan
    it('Create plan', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.plan.create({
                name: 'Monthly retainer',
                interval: 'monthly',
                amount: 500000,
            });
            assert.strictEqual(res.status, true);
            expect(res).to.have.property('data');
            expect(res.data).to.have.property('name');
            expect(res.data).to.have.property('plan_code');
        } catch (error) {
            return error;
        }
    });

    // List plan
    it('List plan', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.plan.list();
            assert.strictEqual(res.status, true);
            expect(res.data).to.be.instanceof(Array);
            expect(res).to.have.property('data');
            id_or_plan_code = res.data.id;
        } catch (error) {
            return error;
        }
    });

    // Update Plan
    it('Update plan', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.plan.update(id_or_plan_code, {
                name: 'Monthly retainer',
            });
            assert.strictEqual(res.status, true);
            expect(res.data).to.be.instanceof(Array);
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });
});
