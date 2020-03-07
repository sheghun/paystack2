import axios from 'axios';
import Transaction from './resources/transaction';
/**
 * @class Paystack
 *
 * Paystack wrapper for communicating with the  paystack's api supports both v1 and v2
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *  contributors    sheghun {@link https://github.com/sheghun}
 */
class Paystack {
    transaction = Transaction;
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
