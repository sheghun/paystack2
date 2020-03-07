import axios from 'axios';
/**
 * @class Transaction
 * @author sheghun {@link https://github.com/sheghun}
 *  Transaction resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Transaction {
    static endpoint = '/transaction';

    static async initialize(options: TransOptions) {
        return axios.post(`${this.endpoint}/initialize`, options);
    }

    static async verify() {}

    static async list() {}

    static async fetch() {}

    static async chargeAuthorization() {}

    static async checkAuthorization() {}

    static async deactivateAuthorization() {}

    static async viewTimeline() {}

    static async transactionTools() {}

    static async export() {}

    static async partialDebit() {}
}

interface TransOptions {
    amount: number;
    email: string;
    reference: string;
    callback_url?: string;
    metadata?: string;
    channels?: string;
    plan?: string;
    invoice_limit: number;
    subaccount: string;
    transaction_charge: number;
    bearer: string;
}
