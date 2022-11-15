import Header from './components/Header';
import Footer from './components/Footer';
import Activities from './Pages/Activities';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="actividades" element={<Activities/>}/>
          <Route path="sobreNosotras" element={<AboutUs/>}/>
          <Route path="contacto" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>    
      <Footer/>
    </Router>
  )
}

export default App;
