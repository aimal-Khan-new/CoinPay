
import { Outlet } from 'react-router-dom'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/subComp/Navbar'
import Footer from './components/subComp/Footer'
import AnimatedCursor from './components/subComp/Animatedcursor'

function App() {


  return (
    <>
    <AnimatedCursor/>
      <Navbar />
      <div className="mt-20"><Outlet/></div>
      <Footer />
    </>
  )

}

export default App
AOS.init({
  once: true,
});