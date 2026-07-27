interface MotoCardProps {
  modelo: string
  especificaciones?: string
  destacada?: boolean
}

export default function MotoCard_mp({
  modelo,
  especificaciones = 'Sin especificaciones técnicas',
  destacada = false,
}: MotoCardProps) {
  return (
    <div
      style={{
        border: destacada ? '2px solid #d32f2f' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: destacada ? '#ffebee' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{modelo}</h3>
      <p style={{ margin: 0, color: '#555' }}>{especificaciones}</p>
    </div>
  )
}
