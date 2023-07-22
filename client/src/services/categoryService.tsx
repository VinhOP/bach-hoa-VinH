import * as httpsRequest from '../utils/httpsRequest';

const getCategoryRequest = async () => {
    try {
        const res = await httpsRequest.get('admin/api/category');
        console.log(res);

        return res;
    } catch (err) {
        return err;
    }
};

const addCategoryRequest = async (formData: FormData) => {
    try {
        const res = await httpsRequest.post('admin/api/category', formData);
        return res.category;
    } catch (err) {
        return err;
    }
};

const deleteCategoryRequest = async (id: string) => {
    try {
        const res = await httpsRequest.del(`admin/api/category/${id}`);
        return res;
    } catch (err) {
        return err;
    }
};

const deleteCloudImgRequest = async (name: string) => {
    try {
        const res = await httpsRequest.del(`admin/api/image/${name}`);
        return res;
    } catch (err) {
        return err;
    }
};

export { getCategoryRequest, addCategoryRequest, deleteCategoryRequest, deleteCloudImgRequest };
