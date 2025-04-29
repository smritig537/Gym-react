
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WorkoutSessions from './Components/WorkoutSessions';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import BMICalculator from './Components/BMICalculator';
import Footer from './Components/Footer';
import './App.css';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
