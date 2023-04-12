import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const [currencies, setCurrencies] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCurrencies(data.data.data)
      })
      .catch(() => {
        console.error('La petición falló')
      })
  }, [])

  if (!currencies) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          currencies.map(({ id, name, priceUsd }) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
