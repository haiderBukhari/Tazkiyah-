import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [finalGoal, setFinalGoal] = useState([])
    useEffect(() => {
        const storedFormData = localStorage.getItem('FinalGoal');
        if (storedFormData) {
            setFinalGoal(JSON.parse(storedFormData));
        }
    }, [])
  return (
    <div className="App">
      <Header finalGoal={finalGoal}/>
      <ReactRoutes finalGoal={finalGoal} setFinalGoal={setFinalGoal}/>
      <Footer />
    </div>
  );
}

export default App;