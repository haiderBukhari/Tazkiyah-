import './App.css';
import { ReactRoutes } from './Router/Routes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AsideNavbar from './Components/Navbar/AsideNavbar';
import CloseIcon from '@mui/icons-material/Close';
import { EditProfile } from './Components/Navbar/EditProfile';
import { UploadContent } from './Components/Navbar/UploadContent';
import { useSelector } from 'react-redux';
import AssignMenteesDialog from './Components/Dialog/AssignMenteesDialog';
import { ForgetPassword } from './Components/ForgetPassword';

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
  const [currentDept, setCurrentDept] = useState(null);
  const [editProfilePopup, setEditProfilePopup] = useState(false);
  const [editUploadContentPopup, setEditUploadContentPopup] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSemesterTemp, setSelectedSemesterTemp] = useState(false);
  const [selectDpt, setSelectDpt] = useState(false);
  const [forgetPasswordPopup, setForgetPasswordPopup] = useState(false);
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
      if (window.innerWidth > 600) { setShow(true); }
      else { setShow(false); }
      if (window.innerWidth > 600 && window.innerWidth < 1201) { setOnMobile(true) }
      if (window.innerWidth > 1201) { setSideBarShow(true) }
      else { setSideBarShow(false); setOnMobile(false) };
      if (window.innerWidth > 1201) setShowClose(false)
      else setShowClose(true)
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  }, []);
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className='alphabeeta'>
        {
          (sidebarshow && showclose) && <CloseIcon onClick={() => { setSideBarShow(!sidebarshow) }} className='icon-app' style={{ left: '270px', color: '#fff' }} />
        }
      </div>
      {useSelector(state => state)?.isLogin &&
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
            setIsLogin={setIsLogin}
            currentDept={currentDept}
            setCurrentDept={setCurrentDept}
            editProfilePopup={editProfilePopup}
            setEditProfilePopup={setEditProfilePopup}
            editUploadContentPopup={editUploadContentPopup}
            setEditUploadContentPopup={setEditUploadContentPopup}
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
            selectDpt={selectDpt}
            setSelectDpt={setSelectDpt}
          />
        }
        <div style={{ marginLeft: `${(sidebarshow && show && isLogin) ? '280px' : '0'}`, marginBottom: `${isLogin ? '20px' : '0'}` }}>
          <ReactRoutes
            finalGoal={finalGoal}
            setFinalGoal={setFinalGoal}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            proceed={proceed}
            setProceed={setProceed}
            corner={corner}
            setcorner={setcorner}
            currentDept={currentDept}
            setCurrentDept={setCurrentDept}
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
            forgetPasswordPopup={forgetPasswordPopup}
            setForgetPasswordPopup={setForgetPasswordPopup}
          />
        </div>
      </div>
      <EditProfile editProfilePopup={editProfilePopup} setEditProfilePopup={setEditProfilePopup} />
      <UploadContent editUploadContentPopup={editUploadContentPopup} setEditUploadContentPopup={setEditUploadContentPopup} />
      {
        ((!sidebarshow || !onmobile) && !isLogin) && <Footer />
      }
      <AssignMenteesDialog
        selectedSemesterTemp={selectedSemesterTemp}
        setSelectedSemesterTemp={setSelectedSemesterTemp}
        selectDpt={selectDpt}
        setSelectDpt={setSelectDpt}
        setSelectedSemester={setSelectedSemester}
      />
      <ForgetPassword forgetPasswordPopup={forgetPasswordPopup} setForgetPasswordPopup={setForgetPasswordPopup}/>
    </div>
  );
}

export default App;