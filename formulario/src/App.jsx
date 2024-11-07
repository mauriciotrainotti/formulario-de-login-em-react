import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("") 
  const [erro, setErro] = useState(false)



  return (
    <>
      <h1>Formulário de Login</h1>
      <form onSubmit={(evt) => {
        evt.preventDefault()
        if (email === "" || senha === "")
          setErro(true)
        else setErro(false)
        // return true
      }} >
      
      <label htmlFor="email">
        <h2>Insira seu email</h2>
        <input type="text" placeholder='seu email' id='email' value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
        </label>
      <label htmlFor="senha">
      <h2>Insira sua senha</h2>
      {/* tenho que fazer tudo isso para poder mudar os valores no input. Tenho que criar uma variavel la em cima com o nome email e senha, deixar o value com o nome dessa variavel e fazer o onchange. */}
      <input type="password" placeholder='sua senha' id='senha' value={senha}
      onChange={(evento) => setSenha(evento.target.value)}/>
      {/* no onchange preciso colocar um evento. O nome do evento eu defino ali no .target por exemplo evento.target.value */}
      </label>
      {erro ? <p id='falha'>Ambos os campos sao obrigatorios</p>:""}
      <br />
      <br />
      <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
lkfsldkf