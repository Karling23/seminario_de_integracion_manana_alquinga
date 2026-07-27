import { useState } from 'react'

interface Servicio {
  id: number
  cliente: string
  descripcion: string
  completado: boolean
}

export default function TaskManager_mp() {
  const [servicios, setServicios] = useState<Servicio[]>([])
  const [cliente, setCliente] = useState('')
  const [descripcion, setDescripcion] = useState('')

  function agregarServicio() {
    if (!cliente.trim() || !descripcion.trim()) return
    setServicios((prev) => [
      ...prev,
      { id: Date.now(), cliente: cliente.trim(), descripcion: descripcion.trim(), completado: false },
    ])
    setCliente('')
    setDescripcion('')
  }

  function eliminarServicio(id: number) {
    setServicios((prev) => prev.filter((s) => s.id !== id))
  }

  function toggleServicio(id: number) {
    setServicios((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, completado: !s.completado } : s
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          placeholder="Nombre del cliente..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del mantenimiento..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={agregarServicio}
          style={{ padding: '8px 16px', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Registrar Orden de Taller
        </button>
      </div>

      {servicios.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay órdenes de taller activas.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {servicios.map((s) => (
          <li
            key={s.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={s.completado}
              onChange={() => toggleServicio(s.id)}
            />
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontWeight: 'bold',
                  display: 'block',
                  textDecoration: s.completado ? 'line-through' : 'none',
                  color: s.completado ? '#aaa' : '#333',
                }}
              >
                {s.cliente}
              </span>
              <span
                style={{
                  fontSize: 13,
                  textDecoration: s.completado ? 'line-through' : 'none',
                  color: s.completado ? '#bbb' : '#555',
                }}
              >
                {s.descripcion}
              </span>
            </div>
            <button
              onClick={() => eliminarServicio(s.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {servicios.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {servicios.filter((s) => s.completado).length} de {servicios.length} listas para entrega
        </p>
      )}
    </div>
  )
}
