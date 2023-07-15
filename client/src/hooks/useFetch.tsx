import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCategories } from '../features/category/categorySlice';

interface IApiResponse {
    data: any;
    error: any;
    isFetching: boolean;
}

const useFetch = (url: string): IApiResponse => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const fetchAPI = async (url: string) => {
                setIsFetching(true);
                const res = await axios.get(url);
                setData(res.data);
                setIsFetching(false);
            };
        } catch (err) {
            console.log(err);
        }
    }, [url]);

    return { data, error, isFetching };
};

export default useFetch;
