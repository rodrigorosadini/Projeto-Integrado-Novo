import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>Minha Conta</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Usuário ou E-mail cadastrado</span>
            <input type='text' required />
            <span>Senha * </span>
            <input type='password' required />
            <button className='button'>Entrar </button>
          </form>
        </div>
      </section>
    </>
  )
}
