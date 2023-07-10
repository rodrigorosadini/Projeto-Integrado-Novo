import React from "react";
import "./login.css";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Navigate } from "react-router-dom";
import arrowImg from "./arrow.svg";
import logoImg from "./farmacia.png";

export const Login = (app) => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <>
        <div className="formLogin">
          <div className="containerLogin">
            <header className="headerLogin">
              <img src={logoImg} alt="" className="logoImg" />
              <span>Por favor entre com sua conta Google</span>
            </header>
            <button
              className="buttonLogin"
              onClick={() => {
                signInGoogle();
              }}
            >
              Entrar <img src={arrowImg} alt="->" />
            </button>
          </div>
        </div>
        ;
      </>
    );
  } else {
    return <Navigate to="/home" />;
  }
};
