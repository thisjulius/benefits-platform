import axios from 'axios';

import { useState, useEffect } from 'react';

interface Post {
    userId: number,
    body: string,
    title: string,
}


const useFetchData = (url: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Post[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        axios.get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
        

    }, [])





    return {data, loading, error};
}

export default useFetchData;