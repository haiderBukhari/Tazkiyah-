import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [finalGoal, setFinalGoal] = useState([])
  useEffect(() => {
    const storedFormData = localStorage.getItem('FinalGoal');
    if (storedFormData) {
      setFinalGoal(JSON.parse(storedFormData));
    }
  }, [])
  return (
    <div className="App">
      {
        location.pathname !== "/contact" && <div onClick={()=>{navigate('/contact')}} className="contact-ss">
          <i class="fa-brands fa-rocketchat"></i>
          <button className='btns-pr'>Contact Us</button>
        </div>
      }
      <Header finalGoal={finalGoal} />
      <ReactRoutes finalGoal={finalGoal} setFinalGoal={setFinalGoal} />
      <Footer />
    </div>
  );
}

export default App;