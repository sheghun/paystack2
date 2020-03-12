/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prettier/prettier */
import Paystack from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';

let customer_code: string;

describe('Customer resource tests', function() {
    // Create customer
    it('Creates customer', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.customer.createCustomer({
                email: faker.internet.email(),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
            });
            assert.strictEqual(res.status, true);
            expect(res).to.have.property('data');
            expect(res.data).to.have.property('id');
        } catch (error) {
            return error;
        }
    });

    // Fetch Customer
    it('Fetch customers', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.customer.fetchCustomer(customer_code);
            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {customer_code: ''}});
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });

    // List customers
    it('List customers', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.customer.listCustomer();

            customer_code = res.data[0].customer_code;

            assert.strictEqual(res.status, true);
            assert.isTrue(res.data.length > 0);
            expect(res).to.have.property('data');
            expect(res.data).to.be.instanceof(Array);
        } catch (error) {
            return error;
        }
    });

    // Updates a customer
    it('Updates customers', async () => {
        try {
            const paystack = new Paystack(process.env.KEY as string);
            const res = await paystack.customer.updateCustomer(customer_code, {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone: faker.phone.phoneNumber(),
            });

            assert.strictEqual(res.status, true);
            assert.containsAllDeepKeys(res, {data: {customer_code: ''}});
            expect(res).to.have.property('data');
        } catch (error) {
            return error;
        }
    });

    // Blacklist customer
});
