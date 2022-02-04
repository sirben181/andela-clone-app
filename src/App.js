import react,{useState} from 'react';
import './index.css'
import Navbar from "./components/Navbar";
import LandingPage from './components/LandingPage';
import Trustees from './components/Trustees';
import Matched from './components/Matched';
import Leader_message from './components/Leader_message';
import Community from './components/Community';
import Success from './components/Success';
import Footer from './components/Footer';
import TalentSpot from './components/TalentSpot';

const App=() =>{
    const [sidebar,setSidebar]=useState(false)
    const handleSidebar=()=>{
        setSidebar(!sidebar)
    }
  return (
    <div className='app'>
        <Navbar handleSidebar={handleSidebar}
        sidebar={sidebar}/>
        <LandingPage />
        <Trustees />
        <Matched />
        <Leader_message />
        <Community />
        <TalentSpot />
        <Success />
      <Footer />
    </div>
  )
}

export default App;
