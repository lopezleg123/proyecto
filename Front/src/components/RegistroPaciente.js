import React, { useState } from "react";
import "./Styles/RegistroPaciente.css";

function RegistrarPacientes() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [tipoSangre, setTipoSangre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState(""); // 'success' o 'error'

  const tipoSangreOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/registrar-paciente",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            apellido,
            rut,
            fechaNacimiento,
            tipoSangre,
            direccion,
            telefono,
            genero,
          }),
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        setMensaje("Paciente registrado con éxito");
        setTipoMensaje("success");
      } else {
        setMensaje(data.mensaje || "Error al registrar el paciente");
        setTipoMensaje("error");
      }
    } catch (error) {
      setMensaje("Error al enviar los datos");
      setTipoMensaje("error");
    }
  };

  return (
    <div className="container">
      <h2>Registrar Paciente</h2>
      {mensaje && (
        <div className={`alert ${tipoMensaje === "success" ? "alert-success" : "alert-danger"}`}>
          {mensaje}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>RUT (sin guión ni puntos):</label>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              pattern="^\d{1,8}-?[\dk]?$"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento:</label>
          <div className="input-container">
            <input
              type="date"
              className="form-control"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Tipo de Sangre:</label>
          <select
            className="form-control"
            value={tipoSangre}
            onChange={(e) => setTipoSangre(e.target.value)}
            required>
            <option value="">Selecciona un tipo de sangre</option>
            {tipoSangreOptions.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Número de Teléfono:</label>
          <div className="input-container">
            <input
              type="tel"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Género:</label>
          <select
            className="form-control"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required>
            <option value="">Selecciona el género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Paciente
        </button>
      </form>
    </div>
  );
}

export default RegistrarPacientes;
