import axios from "axios";
import { useState } from "react";


const useFetch = (url) =>{
    const [hasError, setHasError] = useState(false);
    const [infoApi, setInfoApi] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getApi = ()=>{
        axios.get(url)
        .then(res => {
        setIsLoading(true);
        setInfoApi(res.data)
        setHasError(false);
        })
        .catch(err => {
        console.log(err)
        setHasError(true)})
        .finally(setIsLoading(false));
    }
    
    const postApi = (data) => {
        setIsLoading(true);
        axios.post(url, data)
            .then(res => {
                setInfoApi(res.data);
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => setIsLoading(false));
    };

    const deleteApi = (id) => {
        setIsLoading(true);
        axios.delete(`${url}/${id}`)
            .then(res => {
                setInfoApi(res.data);
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => setIsLoading(false));
    };

    const putApi = (id, data) => {
        setIsLoading(true);
        axios.put(`${url}/${id}`, data)
            .then(res => {
                setInfoApi(res.data);
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => setIsLoading(false));
    };

    return [infoApi, getApi, postApi, deleteApi, putApi, hasError, isLoading];
}

export default useFetch;