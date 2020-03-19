/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
/* eslint-disable valid-jsdoc */
import axios from 'axios';
import * as util from '../util';
/**
 * @class Subaccount
 *  Subaccount resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Subaccount {
    static endpoint = '/subaccount';

    /**
     * Creates a subaccount
     */
    static async create(options: CreateSubAccountOptions) {
        return util.extractResponse(axios.post(`${this.endpoint}`, options));
    }

    /**
     * Lists subaccount
     */
    static async list(options: {perPage?: number; page?: number} = {}) {
        return util.extractResponse(axios.get(`${this.endpoint}`, {params: options}));
    }

    /**
     * Get a subaccount
     */
    static async fetch(id_or_slug: string) {
        return util.extractResponse(axios.get(`${this.endpoint}/${id_or_slug}`));
    }

    /**
     * Updates a subaccount
     */
    static async update(id_or_slug: string, options: Partial<CreateSubAccountOptions>) {
        return util.extractResponse(axios.put(`${this.endpoint}/${id_or_slug}`, options));
    }
}

export default Subaccount;
