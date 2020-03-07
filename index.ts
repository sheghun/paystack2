import axios from 'axios';
/**
 * @class Paystack
 * @author sheghun {@link https://github.com/sheghun}
 * Paystack wrapper for communicating with the  paystack's api supports both v1 and v2
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Paystack {
    /**
     * @param {string} sk - secret key
     *
     */
    constructor(sk: string) {
        axios.defaults.headers.Authorization = `Bearer ${sk}`;
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.defaults.baseURL = 'https://api.paystack.co/';
    }
}
