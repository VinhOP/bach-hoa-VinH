import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCategories, setIsLoading } from '../features/category/categorySlice';

interface IApiResponse {
    data: any;
    error: any;
    isLoading: boolean;
    post: (url: string, body: FormData) => {};
}

const usePost = (): IApiResponse => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const post = async (url: string, body: FormData) => {
        try {
            const fetchAPI = async () => {
                setIsLoading(false);
                const res = await axios.post(url, body);
                setData(res.data);
                setIsLoading(true);
            };
        } catch (err) {
            console.log(err);
        }
    };

    return { data, error, isLoading, post };
};

export default usePost;
