"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractResponse = async (call) => {
    try {
        const res = await call;
        return res.data;
    }
    catch (err) {
        if (err.response) {
            return err.response.data;
        }
        else {
            throw err;
        }
    }
};
