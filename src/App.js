import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <ReactRoutes />
    </div>
  );
}

export default App;