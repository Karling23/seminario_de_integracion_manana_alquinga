import { useState } from 'react'

interface ClienteInteresado {
  nombre: string
  telefono: string
  motoModelo: string
  presupuesto: number
}

export default function UserProfileForm_mp() {
  const [cliente, setCliente] = useState<ClienteInteresado>({
    nombre: '',
    telefono: '',
    motoModelo: '',
    presupuesto: 0,
  })

  function handleChange(field: keyof ClienteInteresado, value: string | number) {
    setCliente((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre Completo"
        value={cliente.nombre}
        onChange={(e) => handleChange('nombre', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Teléfono de contacto"
        value={cliente.telefono}
        onChange={(e) => handleChange('telefono', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Modelo de Moto que le interesa"
        value={cliente.motoModelo}
        onChange={(e) => handleChange('motoModelo', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Presupuesto aproximado ($)"
        type="number"
        value={cliente.presupuesto || ''}
        onChange={(e) => handleChange('presupuesto', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>Interesado:</strong> {cliente.nombre || '—'} · {cliente.telefono || '—'} · Moto: {cliente.motoModelo || '—'} · Presupuesto: ${cliente.presupuesto || '0'}
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
