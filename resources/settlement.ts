/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable valid-jsdoc */
import axios from 'axios';
import * as util from '../util';

/**
 * @class Customer
 *  Customer resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */

class Settlement {
    static endpoint = '/settlement';

    /**
     * Fetch Settlements
     */
    static async fetch(options: FetchSettlementOptions) {
        return util.extractResponse(axios.get(`${this.endpoint}`));
    }

    /**
     * Fetch Settlement Transactions
     */
    static async fetchTransc(settlement_id: string, options: FetchSettlementTransactionsOptions) {
        return util.extractResponse(
            axios.get(`${this.endpoint}/${settlement_id}/transaction`, {params: options}),
        );
    }
}

export default Settlement;
