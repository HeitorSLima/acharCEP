import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [cep, setCep] = useState(null)

  async function buscarCep() {
    try{
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      const dados = await resposta.json();

      setCep(dados);
    } catch(erro) {
      console.error("Não foi possível buscar o CEP: ", erro);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div>
          <form action="">
            <input name="cep" type="text" placeholder="Insira um CEP aqui..."/>

            <button type="submit" onClick={buscarCep}>Buscar</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
