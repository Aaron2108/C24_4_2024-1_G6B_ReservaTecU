import axios from "axios";
import { useState } from "react";

// const baseUrl = 'http://127.0.0.1:8000/api/usuarios/';
const baseUrl = 'https://balanced-delight-production.up.railway.app/api/user/profile'
const useFetchPerfil = () => {
    const [hasError, setHasError] = useState(false);
    const [infoPerfil, setInfoApi] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const axiosConfig = {
        withCredentials: true, 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
        }
    };

    const getAllPerfil = () => {
        setIsLoading(true);
        axios.get(baseUrl, axiosConfig)
            .then(res => {
                setInfoApi(Array.isArray(res.data) ? res.data : []);
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
                setInfoApi([]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const createPerfil = (credentials) => {
        setIsLoading(true);
        axios.post(baseUrl, credentials, axiosConfig)
            .then(res => {
                setInfoApi(prevInfo => Array.isArray(prevInfo) ? [...prevInfo, res.data] : [res.data]);
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const updatePerfil = (id, credentials) => {
        setIsLoading(true);
        axios.put(`${baseUrl}${id}`, credentials, axiosConfig)
            .then(res => {
                setInfoApi(prevInfo => prevInfo.map(item => item.pk_id_campo === id ? res.data : item));
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const deletePerfil = (id) => {
        setIsLoading(true);
        axios.delete(`${baseUrl}${id}`, axiosConfig)
            .then(res => {
                setInfoApi(prevInfo => prevInfo.filter(item => item.pk_id_campo !== id));
                setHasError(false);
            })
            .catch(err => {
                console.log(err);
                setHasError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return [getAllPerfil, createPerfil, updatePerfil, deletePerfil, isLoading, infoPerfil];
}

export default useFetchPerfil;
