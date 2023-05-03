import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arroglo.map( (equipo, index) => {
    //    return <option></option>
    // })

    const equipos = [
        "Programacion.",
        "Front End.",
        "Data Science.",
        "Devops.",
        "Ux y Diseno.",
        "Movil.",
        "Innovacion y Gestion."
    ]

    const manejarCambio = (e) => {
      console.log("cambio", e.target.value)
      props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos.</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
          { equipos.map( (equipo, index) => {
            return <option key={index} value={equipo}>{equipo}</option>
          }) }
        </select>
    </div>
}

export default ListaOpciones