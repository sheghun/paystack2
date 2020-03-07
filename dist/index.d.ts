import Transaction from "./resources/transaction";
/**
 * @class Paystack
 * @author sheghun {@link https://github.com/sheghun}
 * Paystack wrapper for communicating with the  paystack's api supports both v1 and v2
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
declare class Paystack {
    transaction: typeof Transaction;
    /**
     * @param {string} secret_key - secret key
     *
     */
    constructor(secret_key: string);
}
export default Paystack;
