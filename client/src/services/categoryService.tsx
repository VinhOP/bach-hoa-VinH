import * as httpsRequest from '../utils/httpsRequest';

const getCategory = async () => {
    try {
        const res = await httpsRequest.get('admin/api');
        console.log(res);

        return res;
    } catch (err) {
        return err;
    }
};

export { getCategory };
