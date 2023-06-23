import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface IApiResponse {
    data: any;
    error: any;
    loading: boolean;
}

const useFetch = (url: string): IApiResponse => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const res = await axios.get(url);
        console.log(res);
    };

    return { data, error, loading };
};

export default useFetch;
