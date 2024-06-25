import Header from "../NavBar/Header"
import './inicio.css';
const Inicio = () => {
  return (
    <div className="div_inicio_Admin">
        <Header/>
        <section className="section2_gestion_reservas">
        <article className="article_gestion_reservas">
            <img className="img_crear_reserva" src="/img/campo1.png" alt="" />
            <section className="section_campos">
                <h2>Campo 1</h2>
            </section>
        </article>
      </section>
    </div>
  )
}
export default Inicio