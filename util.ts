import {AxiosResponse} from 'axios';
export const extractResponse = async (call: Promise<AxiosResponse>) => {
    try {
        const res = await call;
        return res.data;
    } catch (err) {
        if (err.response) {
            return err.response.data;
        } else {
            throw err;
        }
    }
};
