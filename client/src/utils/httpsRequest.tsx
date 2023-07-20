import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path: string, option: any = {}) => {
    const response = await request.get(path, option);
    console.log(response);

    return response.data;
};
