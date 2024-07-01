import { useEffect, useState } from "react";
import useFetchCarreras from "../../services/useFetchCarreras";
import useFetchPerfil from "../../services/useFetchPerfil";
import Footer from "../Footer"
import Header from "../NavBar/Header"
import { useNavigate } from "react-router-dom";

const Perfil = () => {

    const [getAllPerfil, createPerfil, updatePerfil, deletePerfil, isLoading, infoPerfil] = useFetchPerfil()

    const [getAllCarrera, createCarrera, updateCarrera, deleteCarrera, isLoadingC, infoCarreras] = useFetchCarreras()

    const [userData, setUserData] = useState({
        nombres: '',
        email: '',
        codigoTecsup: '',
        carrera: { id: '' }, 
    });
    const [carreras, setCarreras] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPerfil()
        console.log(infoPerfil);
        getAllCarrera();
        console.log(infoCarreras);
        
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'carreraId') {
            setUserData(prevState => ({
                ...prevState,
                carrera: { id: value },
            }));
        } else {
            setUserData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        updatePerfil(userData)
        e.preventDefault();
        navigate('/inicio');
    };

  return (
    <div className="div_inicio_Admin">
        <Header/>
        <div className="container mt-5">
                <h1>Actualizar Perfil</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombres"
                            value={userData.nombres}
                            onChange={handleChange}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Código Tecsup:</label>
                        <input
                            type="text"
                            name="codigoTecsup"
                            value={userData.codigoTecsup}
                            onChange={handleChange}
                            className="form-control"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Carrera:</label>
                        <select
                            name="carreraId"
                            value={userData.carrera.id}
                            onChange={handleChange}
                            className="form-control"
                            disabled
                        >
                            <option value="">Selecciona una Carrera</option>
                            {infoCarreras?.map(carrera => (
                                <option key={carrera.id} value={carrera.id}>
                                    {carrera.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Actualizar</button>
                </form>
            </div>
        {/* <Footer/> */}
    </div>
  )
}
export default Perfil