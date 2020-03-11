/* eslint-disable valid-jsdoc */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import * as util from '../util';
import axios from 'axios';
/**
 * @class Customer
 *  Customer resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Customer {
    static endpoint = '/customer';

    /*
        Creates a new customer
     */
    static async createCustomer(options: CustomerCreateOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}`, {options}));
    }
    /*
        Lists all customer
     */
    static async listCustomer(options: CustomerListOptions = {}) {
        return util.extractResponse(axios.get(`${this.endpoint}`, {params: options}));
    }
    /*
        Fetches a customer
      */
    static async fetchCustomer(email_or_id_or_customer_code: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/${email_or_id_or_customer_code}`));
    }

    /*
        Updates a customer info
     */
    static async updateCustomer(id_or_customer_code: string, options: CustomerUpdateOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}/${id_or_customer_code}`, options));
    }

    /*
        Whitelist or Blacklist a customer
     */
    static async whiteOrBlacklistCustomer(
        id_or_customer_code: string,
        options: {risk_action: 'allow' | 'deny'},
    ) {
        (options as any).customer = id_or_customer_code;
        return util.extractResponse(axios.post(`${this.endpoint}/set_risk_action`, options));
    }
}

export default Customer;
