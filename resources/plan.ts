/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
/* eslint-disable valid-jsdoc */
import {extractResponse} from '../util';
import axios from 'axios';

/**
 * @class Plan
 *  Plan resources
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Plan {
    static endpoint = '/plan';

    // Create Plan
    static async create(options: CreatePlanOptions) {
        return extractResponse(axios.post(`${this.endpoint}`, {options}));
    }

    // List Plan
    static async list(options: ListPlanOptions = {}) {
        return extractResponse(axios.get(`${this.endpoint}`, {params: options}));
    }

    // Fetch Plan
    static async fetch(id_or_plan_code: string) {
        return extractResponse(axios.get(`${this.endpoint}/${id_or_plan_code}`));
    }

    // Update Plan
    static async update(id_or_plan_code: string, options: UpdatePlanOptions) {
        return extractResponse(axios.put(`${this.endpoint}/${id_or_plan_code}`, options));
    }
}

export default Plan;
