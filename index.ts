/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
/* eslint-disable valid-jsdoc */
import axios from 'axios';
import Transaction from './resources/transaction';
import Customer from './resources/customer';
import Subaccount from './resources/subaccount';
import Plan from './resources/plan';

/**
 * @class Paystack
 *
 * Paystack wrapper for communicating with the  paystack's api supports both v1 and v2
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *  contributors    sheghun {@link https://github.com/sheghun}
 *
 *  {@link https://https://developers.paystack.co/v2.0/reference API Docs}
 */
class Paystack {
    transaction = Transaction;
    customer = Customer;
    subaccount = Subaccount;
    plan = Plan;

    /**
     * @param {string} secret_key - secret key
     *
     */
    constructor(secret_key: string) {
        axios.defaults.headers.Authorization = `Bearer ${secret_key}`;
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'https://api.paystack.co/';
    }
}

export default Paystack;
