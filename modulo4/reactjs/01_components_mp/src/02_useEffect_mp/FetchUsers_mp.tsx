import { useState, useEffect } from 'react'

interface Asesores {
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

export default function FetchUsers_mp() {
  const [asesores, setAsesores] = useState<Asesores[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchAsesores() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Asesores[] = await res.json()

        if (!cancelled) setAsesores(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchAsesores()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando lista de asesores de ventas...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {asesores && !loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {asesores.map((asesor) => (
            <div key={asesor.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{asesor.name}</p>
              <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
                Código Asesor: @{asesor.username}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                Email de Ventas: {asesor.email}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                Sucursal Concesionario: {asesor.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
