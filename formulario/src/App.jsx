import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [erro, setErro] = useState("");
  
  // Validação do e-mail
  const validaEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
  };
  
  // Validação da senha (mínimo de 6 caracteres)
  const validaSenha = (senha) => {
    return senha.length >= 6;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email === "" || senha === "") {
      setErro("Ambos os campos são obrigatórios");
      return;
    }

    if (!validaEmail(email)) {
      setErro("Formato de e-mail inválido");
      return;
    }

    if (!validaSenha(senha)) {
      setErro("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    if (senha !== confirmarsenha) {
      setErro("As senhas não coincidem");
      return;
    }

    setErro(""); // Se tudo estiver certo, limpa as mensagens de erro
    alert("Formulário enviado com sucesso!");
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <>
      <h1>Formulário de Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <h2>Insira seu email</h2>
          <input 
            type="text" 
            placeholder='seu email' 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        
        <label htmlFor="senha">
          <h2>Insira sua senha</h2>
          <input 
            type="password" 
            placeholder='sua senha' 
            id='senha' 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>

        <label htmlFor="confirmarsenha">
          <h2>Confirme sua senha</h2>
          <input 
            type="password" 
            placeholder='confirme sua senha' 
            id='confirmarsenha' 
            value={confirmarsenha}
            onChange={(e) => setConfirmarsenha(e.target.value)}
          />
        </label>

        {erro && <p id='falha' style={{ color: 'red' }}>{erro}</p>}
        
        <br />
        <br />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default App;
