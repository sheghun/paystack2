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
    static async create(options: {
        email: string;
        first_name?: string;
        last_name?: string;
        phone?: string;
        metadata?: string;
    }) {
        return util.extractResponse(axios.post(`${this.endpoint}`, {options}));
    }
    /*
        Lists a customer
     */
    static async list(options: {perPage?: number; page?: number} = {}) {
        return util.extractResponse(axios.get(`${this.endpoint}`, {params: options}));
    }
    /*
        Fetches a customer
      */
    static async fetch(email_or_id_or_customer_code: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/${email_or_id_or_customer_code}`));
    }

    /*
        Updates a customer info
     */
    static async update(
        id_or_customer_code: string,
        options: {
            first_name?: string;
            last_name?: string;
            phone?: string;
            metadata?: string;
        },
    ) {
        return util.extractResponse(axios.post(`${this.endpoint}/${id_or_customer_code}`, options));
    }

    /*
        Whitelist or Blacklist a customer
     */
    static async whiteOrBlacklist(
        id_or_customer_code: string,
        options: {risk_action: 'allow' | 'deny'},
    ) {
        (options as any).customer = id_or_customer_code;
        return util.extractResponse(axios.post(`${this.endpoint}/set_risk_action`, options));
    }
}

export default Customer;
