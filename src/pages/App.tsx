import Header from '../components/Header'
import AboutMe from './AboutMe'
import Home from './Home'
import Proyects from './Proyects'
function App() {

  return (
    <div className='overflow-x-hidden' >
      <Header />
      <Home/>
      <AboutMe />
      <Proyects />
    </div>
  )
}

export default App
