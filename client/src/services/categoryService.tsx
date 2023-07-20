import * as httpsRequest from '../utils/httpsRequest';

const getCategoryRequest = async () => {
    try {
        const res = await httpsRequest.get('admin/api');
        console.log(res);

        return res;
    } catch (err) {
        return err;
    }
};

const addCategoryRequest = async (formData: FormData) => {
    try {
        const res = await httpsRequest.post('admin/api', formData);
        return res.category;
    } catch (err) {
        return err;
    }
};

const deleteCategoryRequest = async (id: string) => {
    try {
        const res = await httpsRequest.del(`admin/api/${id}`);
        return res;
    } catch (err) {
        return err;
    }
};

const deleteCategoryImgRequest = async (name: string) => {
    try {
        const res = await httpsRequest.del(`admin/api/image/${name}`);
        return res;
    } catch (err) {
        return err;
    }
};

export { getCategoryRequest, addCategoryRequest, deleteCategoryRequest, deleteCategoryImgRequest };
