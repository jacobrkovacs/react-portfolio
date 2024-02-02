import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import bgImg from '/src/assets/images/background.png'


const background = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh'
}

function App() {

  return (
    <>
      <div className='background' style={background}>
        <Nav />
        <main className='mx-5'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App;
