import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const marcaRef = useRef<HTMLInputElement>(null)
  const modeloRef = useRef<HTMLInputElement>(null)
  const anioRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    marcaRef.current?.focus()
  }, [])

  function handleMarcaKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      modeloRef.current?.focus()
    }
  }

  function handleModeloKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      anioRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={marcaRef}
        placeholder="Marca de la Moto (ej: Suzuki)"
        onKeyDown={handleMarcaKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={modeloRef}
        placeholder="Modelo de la Moto (ej: Gixxer)"
        onKeyDown={handleModeloKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={anioRef}
        type="number"
        placeholder="Año de fabricación"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
      >
        Buscar Moto
      </button>
    </form>
  )
}
