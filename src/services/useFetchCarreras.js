import axios from "axios";
import { useState } from "react";

const baseUrl = 'https://balanced-delight-production.up.railway.app/api/carreras'
const useFetchCarreras = () => {
    const [hasError, setHasError] = useState(false);
    const [infoCarreras, setInfoApi] = useState([]);
    const [isLoadingC, setIsLoading] = useState(true);

    const axiosConfig = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    const getAllCarrera = () => {
        setIsLoading(true);
        axios.get(baseUrl, {withCredentials: true})
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

    const createCarrera = (credentials) => {
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

    const updateCarrera = (id, credentials) => {
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

    const deleteCarrera = (id) => {
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

    return [getAllCarrera, createCarrera, updateCarrera, deleteCarrera, isLoadingC, infoCarreras];
}
export default useFetchCarreras