import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AsideNavbar from './Components/Navbar/AsideNavbar';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [finalGoal, setFinalGoal] = useState([])
  const [sidebarshow, setSideBarShow] = useState(true)
  const [onmobile, setOnMobile] = useState(false)
  const [showclose, setShowClose] = useState(false)
  const [show, setShow] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [corner, setcorner] = useState("");
  const [proceed, setProceed] = useState(false);

  useEffect(() => {
    const storedFormData = localStorage.getItem('FinalGoal');
    const storedLogin = localStorage.getItem('isLogin');
    if (storedFormData) {
      setFinalGoal(JSON.parse(storedFormData));
    }
    if (storedLogin) {
      setIsLogin(JSON.parse(storedLogin));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setShow(true);
      }
      else {
        setShow(false);
      }
      if (window.innerWidth > 600 && window.innerWidth < 1201) {
        setOnMobile(true)
      }
      if (window.innerWidth > 1201) {
        setSideBarShow(true)
      }
      else {
        setSideBarShow(false)
        setOnMobile(false)
      };

      if (window.innerWidth > 1201) setShowClose(false)
      else setShowClose(true)
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className='alphabeeta'>
        {
          (sidebarshow && showclose) && <CloseIcon onClick={() => { setSideBarShow(!sidebarshow) }} className='icon-app' style={{ left: '270px', color: '#fff' }} />
        }
      </div>
      {
        location.pathname !== "/contact" && <div onClick={() => { navigate('/contact') }} className="contact-ss">
          <i class="fa-brands fa-rocketchat"></i>
          <button className='btns-pr'>Contact Us</button>
        </div>
      }
      {
        ((!sidebarshow || !onmobile)) && <Header setSideBarShow={setSideBarShow} sidebarshow={sidebarshow} isLogin={isLogin} setIsLogin={setIsLogin} showclose={showclose} />
      }
      <div>
        {
          sidebarshow && isLogin && <AsideNavbar
            setProceed={setProceed}
            corner={corner}
            setcorner={setcorner}
            sidebarshow={sidebarshow}
            setSideBarShow={setSideBarShow}
            showclose={showclose}
          />
        }
        <div style={{ marginLeft: `${(sidebarshow && show && isLogin) ? '280px' : '0'}`, marginBottom: `${isLogin ? '20px' : '0'}` }}>
          <ReactRoutes finalGoal={finalGoal} setFinalGoal={setFinalGoal} isLogin={isLogin} setIsLogin={setIsLogin} proceed={proceed} setProceed={setProceed} corner={corner} setcorner={setcorner} />
        </div>
      </div>
      {
        ((!sidebarshow || !onmobile) && !isLogin) && <Footer />
      }
    </div>
  );
}

export default App;