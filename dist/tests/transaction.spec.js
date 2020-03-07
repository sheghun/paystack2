"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const faker_1 = __importDefault(require("faker"));
describe('Transaction resource tests', function () {
    it('Initialize transaction', async function () {
        (async () => {
            const paystack = new index_1.default(process.env.KEY);
            try {
                const res = await paystack.transaction.initialize({
                    email: faker_1.default.internet.email(),
                    amount: 40000,
                    reference: faker_1.default.random.alphaNumeric(),
                });
            }
            catch (err) {
                if (err.response) {
                    console.log(err.toString());
                }
                else {
                    throw new Error('Not network');
                }
            }
        })();
    });
});
