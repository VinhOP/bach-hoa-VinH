import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001',
});

const get = async (path: string, option: any = {}) => {
    const response = await request.get(path, option);

    return response.data;
};

const post = async (path: string, body: any) => {
    const response = await request.post(path, body);

    return response.data;
};

const del = async (path: string) => {
    const response = await request.delete(path);

    return response.data;
};

export { get, post, del };
