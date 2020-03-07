"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * @class Transaction
 * @author sheghun {@link https://github.com/sheghun}
 *  Transaction resource
 * {@link https://github.com/sheghun/paystack2}
 *    **********
 *
 */
class Transaction {
    static async initialize(options) {
        return axios_1.default.post(`${this.endpoint}/initialize`, options);
    }
    static async verify() { }
    static async list() { }
    static async fetch() { }
    static async chargeAuthorization() { }
    static async checkAuthorization() { }
    static async deactivateAuthorization() { }
    static async viewTimeline() { }
    static async transactionTools() { }
    static async export() { }
    static async partialDebit() { }
}
Transaction.endpoint = '/transaction';
exports.default = Transaction;
