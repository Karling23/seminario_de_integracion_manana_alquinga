interface MotoInfo {
  modelo: string
  tipo: string
  precio: number
}

interface MotoListProps {
  motos: MotoInfo[]
  title?: string
}

export default function MotoList_mp({ motos, title = 'Catálogo de Motos' }: MotoListProps) {
  if (motos.length === 0) {
    return <p style={{ color: '#999' }}>No hay motocicletas disponibles en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {motos.map((moto) => (
          <li
            key={moto.modelo}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>🏍️ {moto.modelo} ({moto.tipo})</span>
            <span style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 13 }}>${moto.precio.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
