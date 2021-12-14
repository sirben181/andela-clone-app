import react from 'react';
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

function App() {
  return (
    <div className='app'>
   <Navbar />
  
   <LandingPage />
   <Trustees />
   <Matched />
   <Leader_message />
   <Community />
   <TalentSpot />
   <Success />
   <Footer />
   
   {/* // <!-- navbar with 8div -->
// <!-- 1.sidebar-logo and three divs
//    hire talent
//    join andela
//    about us
// 2.Andela with an icon
// 3.for companies
// 4.for enginners
// 5.enterprise
// 6.hire talent 
// 7.join andela
// 8.Signin  -->
// <!-- div with a photo -->
// <!-- div trusted by -->
// <!-- div with three cards -->
// <!-- div salesrabbit -->
// <!-- our communities -->
// <!-- div with talent spot -->
// <!-- div success stories -->
// <!-- subfooter iconst -->
// <!-- footer --> */}
    
    </div>
  );
}

export default App;
