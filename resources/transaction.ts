import axios from 'axios';
import * as util from '../util';
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

    /**
     * Initialize a transaction
     * @param {TransOptions} options
     */
    static async initialize(options: TransOptions & {channel?: string}) {
        return util.extractResponse(axios.post(`${this.endpoint}/initialize`, options));
    }

    /**
     * Verifies a transactions
     * @param {string} trans_ref - Transaction reference
     */
    static async verify(trans_ref: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/verify/${trans_ref}`));
    }

    /**
     * Gets list of transactions
     * @param {TransListOptions} options
     */
    static async list(options: TransListOptions) {
        return util.extractResponse(axios.get(`${this.endpoint}`, {params: options}));
    }

    /**
     * Fetch a transaction
     * @param {string} id
     */
    static async fetch(id: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/${id}`));
    }

    /**
     * Charges an authorization code
     * @param {TransAuthOptions} options
     */
    static async chargeAuthorization(
        options: TransOptions & {authorization_code: string; currency?: string},
    ) {
        return util.extractResponse(axios.get(`${this.endpoint}/charge_authorization`));
    }

    /**
     *  All mastercard and visa authorizations can be checked with this
     *  endpoint to know if they have funds for the payment you seek.
     */
    static async checkAuthorization(options: {
        authorization_code: string;
        amount: number;
        email: string;
        currency?: string;
    }) {
        return util.extractResponse(axios.get(`${this.endpoint}/check_authorization`));
    }

    /**
     * For when the card needs to be forgotten
     * @param {string} authorization_code
     */
    static async deactivateAuthorization(authorization_code: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/deactivate_authorization`));
    }

    /**
     * Gets transaction timeline
     * @param id_or_authorization_code
     */
    static async viewTimeline(id_or_authorization_code: string) {
        return util.extractResponse(
            axios.get(`${this.endpoint}/timeline/${id_or_authorization_code}`),
        );
    }

    /**
     *  Total amount received on your account
     *  @param options
     */
    static async transactionTotals(options: {from: string | Date; to: string | Date}) {
        return util.extractResponse(axios.get(`${this.endpoint}/totals`, {params: options}));
    }

    /**
     * Generates and returns a file path to transactions in csv format
     * @param options
     */
    static async export(options: ExportTransOptions) {
        return util.extractResponse(axios.get(`${this.endpoint}/export`, {params: options}));
    }

    /**
     * Performs a partial debit
     * @param options
     */
    static async partialDebit(options: PartialDebitTransOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}/partial_debit`, {options}));
    }
}

export default Transaction;

interface TransOptions {
    amount: number;
    email: string;
    reference: string;
    callback_url?: string;
    metadata?: string;
    plan?: string;
    invoice_limit?: number;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: string;
}

interface TransListOptions {
    perPage: number;
    page: number;
    customer: number;
    status: string;
    from: string | Date;
    to: string | Date;
    amount: number;
}

interface ExportTransOptions {
    from?: string | Date;
    to?: string | Date;
    settled?: boolean;
    payment_page?: number;
    customer?: number;
    currency?: string;
    settlement?: number;
    amount?: number;
    status?: string;
}

interface PartialDebitTransOptions {
    authorization: string;
    currency: string;
    amount: number;
    email: string;
    at_least: number;
    reference: string;
}
