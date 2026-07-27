import { useState } from 'react'

export default function SafeCounter_mp() {
  const [stock, setStock] = useState(0)

  function agregarUno() {
    setStock((prev) => prev + 1)
  }

  function recibirLote() {
    setStock((prev) => prev + 1)
    setStock((prev) => prev + 1)
    setStock((prev) => prev + 1)
  }

  return (
    <div>
      <p style={{ fontSize: 16, fontWeight: 'bold' }}>Stock de Motos: {stock} unidades</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={agregarUno} style={btnStyle}>Agregar 1 Moto</button>
        <button onClick={recibirLote} style={btnStyle}>Recibir Lote (+3 Motos)</button>
      </div>
    </div>
  )
}

const btnStyle = {
  padding: '6px 12px',
  borderRadius: 6,
  border: '1px solid #ccc',
  background: '#f5f5f5',
  cursor: 'pointer',
}
