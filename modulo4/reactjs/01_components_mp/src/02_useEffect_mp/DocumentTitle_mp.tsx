import { useEffect } from 'react'

export default function DocumentTitle_mp() {
  useEffect(() => {
    document.title = 'MotoShop - Especialistas en Dos Ruedas'

    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título del navegador ha cambiado a la temática de MotoShop.
    </p>
  )
}
