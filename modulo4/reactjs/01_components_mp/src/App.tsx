import DigitalCounter_mp from './01_usestate_mp/DigitalCounter_mp.tsx'
import SafeCounter_mp from './01_usestate_mp/SafeCounter_mp.tsx'
import TaskManager_mp from './01_usestate_mp/TaskManager_mp.tsx'
import UserProfileForm_mp from './01_usestate_mp/UserProfileForm_mp.tsx'
import DocumentTitle_mp from './02_useEffect_mp/DocumentTitle_mp.tsx'
import FetchUser_mp from './02_useEffect_mp/FetchUser_mp.tsx'
import FetchUsers_mp from './02_useEffect_mp/FetchUsers_mp.tsx'
import AutoFocusForm_mp from './03_useRef_mp/AutoFocusForm_mp.tsx'
import InlineEditor_mp from './03_useRef_mp/InlineEditor_mp.tsx'
import MotoList_mp from './components/MotoList_mp.tsx'
import MotoCard_mp from './components/MotoCard_mp.tsx'

const PASO: number = 41

const motos = [
  { modelo: 'Honda CB500X', tipo: 'Aventura', precio: 8200 },
  { modelo: 'Yamaha YZF-R3', tipo: 'Deportiva', precio: 6500 },
  { modelo: 'Vespa Primavera', tipo: 'Scooter', precio: 4500 },
]

export default function App() {
  const content =
    PASO ===  6 ? <MotoList_mp motos={motos} title="Motos en Oferta" /> :
    PASO === 11 ? <MotoCard_mp modelo="Yamaha YZF-R1" especificaciones="998cc, 200 HP, Deportiva" destacada /> : 

    PASO === 20 ? <DigitalCounter_mp initialValue={0} step={10} label="Velocímetro (km/h)" /> :
    PASO === 21 ? <SafeCounter_mp/> :
    PASO === 22 ? <UserProfileForm_mp /> :
    PASO === 23 ? <TaskManager_mp /> :
    
    PASO === 30 ? <DocumentTitle_mp /> :
    PASO === 31 ? <FetchUser_mp /> :
    PASO === 32 ? <FetchUsers_mp /> :

    PASO === 40 ? <AutoFocusForm_mp /> :
    PASO === 41 ? <InlineEditor_mp /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}