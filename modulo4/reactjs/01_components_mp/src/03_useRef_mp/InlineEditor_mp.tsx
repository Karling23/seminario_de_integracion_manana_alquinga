import { useRef, useState } from 'react'

export default function InlineEditor_mp() {
  const precioRef = useRef<HTMLInputElement>(null)
  const motorRef = useRef<HTMLInputElement>(null)
  const [fichaGuardada, setFichaGuardada] = useState('Ninguna moto editada')

  function handleSave() {
    const precioVal = precioRef.current?.value.trim() ?? ''
    const motorVal = motorRef.current?.value.trim() ?? ''

    const precioTexto = precioVal === '' ? '$0' : `$${precioVal}`
    const motorTexto = motorVal === '' ? 'Motor Genérico' : motorVal

    setFichaGuardada(`Precio: ${precioTexto} | Motor: ${motorTexto}`)
  }

  function handleClear() {
    if (precioRef.current) precioRef.current.value = ''
    if (motorRef.current) motorRef.current.value = ''
    precioRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Ficha Guardada: <strong style={{ color: '#111827' }}>{fichaGuardada}</strong>
      </p>

      <input
        ref={precioRef}
        type="number"
        placeholder="Precio de la moto..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      
      <input
        ref={motorRef}
        placeholder="Cilindrada/Motor (ej: 250cc, Eléctrica)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Guardar Ficha
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
