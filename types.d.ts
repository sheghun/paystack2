/* eslint-disable camelcase */

// Customers
declare interface CustomerListOptions {
    perPage?: number;
    page?: number;
}

declare interface CustomerCreateOptions {
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: string;
}

declare interface CustomerUpdateOptions {
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: string;
}

// Transaction
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

declare interface CheckAuthorizationOptions {
    authorization_code: string;
    amount: number;
    email: string;
    currency?: string;
}

declare interface TransactionTotalsOptions {
    from?: string | Date;
    to?: string | Date;
}

// Plan

declare interface CreatePlanOptions {
    name: string;
    description?: string;
    amount: number;
    interval: string;
    send_invoices?: boolean;
    send_sms?: boolean;
    currency?: string;
    invoice_limit?: number;
}

declare interface ListPlanOptions {
    perPage?: string;
    page?: string;
    interval?: string;
    amount?: string;
}

declare interface UpdatePlanOptions {
    name?: string;
    description?: string;
    amount?: string;
    send_invoices?: boolean;
    send_sms?: string;
    currency?: string;
    invoice_limit?: number;
}
