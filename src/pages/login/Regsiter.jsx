import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"

export const Regsiter = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Cadastro</h3>
              <h1>Minha Conta</h1>
            </div>
          </div>

          <form>
            <span>Seu E-mail</span>
            <input type='text' required />
            <span>Usuário * </span>
            <input type='text' required />
            <span>Senha * </span>
            <input type='text' required />
            <span>Confirm Password * </span>
            <input type='text' required />
            <button className='button'>Cadastro</button>
          </form>
        </div>
      </section>
    </>
  )
}
