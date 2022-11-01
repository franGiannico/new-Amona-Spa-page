import './App.css';
import Header from './components/Header';
import { 
  BrowserRouter as Router 
} from "react-router-dom";
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Header/>
      <Banner/>
    </Router>
  );
}

export default App;
