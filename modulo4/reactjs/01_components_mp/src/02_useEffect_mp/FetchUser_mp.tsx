import { useState, useEffect } from 'react'

interface Distribuidor {
  id:       number
  name:     string
  email:    string
  username: string
  company:  Company
}

interface Company {
  name:     string
  catchPhrase:    string
  bs: string
}

export default function FetchUser_mp() {
  const [distribuidorId, setDistribuidorId] = useState(1)
  const [distribuidor, setDistribuidor] = useState<Distribuidor | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchDistribuidor() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${distribuidorId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Distribuidor = await res.json()

        if (!cancelled) setDistribuidor(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchDistribuidor()

    return () => { cancelled = true }
  }, [distribuidorId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setDistribuidorId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: distribuidorId === id ? '#d32f2f' : '#fff',
              color:      distribuidorId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: distribuidorId === id ? 600 : 400,
            }}
          >
            Proveedor {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando datos del distribuidor...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {distribuidor && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{distribuidor.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            Contacto Técnico: @{distribuidor.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Email: {distribuidor.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Concesionario / Marca: {distribuidor.company.name}
          </p>
        </div>
      )}
    </div>
  )
}
