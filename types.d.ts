/* eslint-disable camelcase */

declare interface TransOptions {
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

declare interface TransListOptions {
    perPage?: number;
    page?: number;
    customer?: number;
    status?: string;
    from?: string | Date;
    to?: string | Date;
    amount?: number;
}

declare interface ExportTransOptions {
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

declare interface PartialDebitTransOptions {
    authorization: string;
    currency: string;
    amount: number;
    email: string;
    at_least: number;
    reference: string;
}
