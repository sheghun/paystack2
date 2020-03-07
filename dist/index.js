"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const transaction_1 = __importDefault(require("./resources/transaction"));
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
     * @param {string} secret_key - secret key
     *
     */
    constructor(secret_key) {
        this.transaction = transaction_1.default;
        axios_1.default.defaults.headers.Authorization = `Bearer ${secret_key}`;
        axios_1.default.defaults.headers['Content-Type'] = 'application/json';
        axios_1.default.defaults.baseURL = 'https://api.paystack.co/';
    }
}
exports.default = Paystack;
