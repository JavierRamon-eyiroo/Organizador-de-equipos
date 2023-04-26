import "./ListaOpciones.css"

const ListaOpciones = () => {

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

    return <div className="lista-opciones">
        <label>Equipos.</label>
        <select>
          { equipos.map( (equipo, index) => {
            return <option key={index}>{equipo}</option>
          }) }
        </select>
    </div>
}

export default ListaOpciones