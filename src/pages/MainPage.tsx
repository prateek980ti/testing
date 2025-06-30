import Sidebar from '../components/Mainpage/Sidebar/Sidebar'
import Aivoice from '../components/Mainpage/Ai-voice/Aivoice'

function MainPage() {
  return (
    <div className='flex'>
      <Sidebar />
      <Aivoice />
    </div>
  )
}

export default MainPage