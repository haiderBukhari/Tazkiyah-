import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <ReactRoutes />
      <Footer />
    </div>
  );
}

export default App;