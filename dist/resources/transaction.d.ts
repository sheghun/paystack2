/**
 * @class Transaction
 * @author sheghun {@link https://github.com/sheghun}
 *  Transaction resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
declare class Transaction {
    static endpoint: string;
    static initialize(options: TransOptions): Promise<import("axios").AxiosResponse<any>>;
    static verify(): Promise<void>;
    static list(): Promise<void>;
    static fetch(): Promise<void>;
    static chargeAuthorization(): Promise<void>;
    static checkAuthorization(): Promise<void>;
    static deactivateAuthorization(): Promise<void>;
    static viewTimeline(): Promise<void>;
    static transactionTools(): Promise<void>;
    static export(): Promise<void>;
    static partialDebit(): Promise<void>;
}
export default Transaction;
interface TransOptions {
    amount: number;
    email: string;
    reference: string;
    callback_url?: string;
    metadata?: string;
    channels?: string;
    plan?: string;
    invoice_limit?: number;
    subaccount?: string;
    transaction_charge?: number;
}
