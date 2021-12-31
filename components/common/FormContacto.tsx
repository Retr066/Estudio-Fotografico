import { useState } from "react";
import { Props } from "../../Interfaces/Email";
const initialState: Props = {
  nombres: "",
  apellidos: "",
  email: "",
  telefono: "",
  mensaje: "",
};
export default function FormContacto() {
  const [mensaje, setMensaje] = useState<Props>(initialState);

  const handleChangeInput = (e: any) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    fetch("api/email", {
      method: "post",
      body: JSON.stringify(mensaje),
    });
  };
  return (
    <>
      <h1 className="my-lg-0 my-sm-5"> Contactos</h1>
      <form onSubmit={handleSubmitForm} method="post">
        <div className="row">
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name"
                value={mensaje.nombres}
                name="nombres"
                onChange={handleChangeInput}
                required
              />
              <label htmlFor="floatingInput">Nombres</label>
            </div>
            <div className="form-floating ">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={mensaje.email}
                name="email"
                onChange={handleChangeInput}
                required
              />
              <label htmlFor="floatingInput">Email </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="lastName"
                value={mensaje.apellidos}
                name="apellidos"
                onChange={handleChangeInput}
                required
              />
              <label htmlFor="floatingInput">Apellidos</label>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                pattern="^-?[0-9]\d*\.?\d*$"
                value={mensaje.telefono}
                name="telefono"
                onChange={handleChangeInput}
                required
              />
              <label htmlFor="floatingPassword">Telefono o Celular</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col my-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                required
                value={mensaje.mensaje}
                name="mensaje"
                onChange={handleChangeInput}
                id="floatingTextarea2"
                style={{ height: "185px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Mensaje</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="w-100 btn btn-outline-primary ">
              ENVIAR
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
