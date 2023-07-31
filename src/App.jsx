import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import HeaderEmployee from './components/headers/headerEmployee'
import HeaderCompany from './components/headers/headerCompany'
import PrivacyPolicyAndConditions from './components/pages/PrivacyConditions'
import AppHome from './components/pages/AppHome'
import Login from './components/pages/Login/Login.jsx'
import SignupEmployee from './components/pages/SignupEmployee'
import SignupAdmin from './components/pages/SignupAdmin'
import ForgotPassword from './components/pages/ForgotPassword'
import Footer from './components/footer';
import AppTemplateHOC from './components/HOCs/AppTemplateHOC'
import AdminHome from './components/pages/AdminWelcome';
import AdminOpenProgram from './components/pages/AdminOpenProgram';
import AdminClosedProgram from './components/pages/AdminClosedProgram';
import EmployeeProfileFillIn from './components/pages/EmployeeProfileFillIn';
import InviteParticipants from './components/pages/InviteParticipants';
import Matchmaking from './components/pages/Matchmaking';
import MatchedList from './components/pages/MatchedList';
import './App.scss'

const pagesWithoutHeaderandBottom = [
  '/login', 
  '/forgot-password', 
  '/signup', 
  '/signup-admin', 
  '/signup-employee',
  '/employee-profile-fill-in'
]

const errorMsgStyles = {
  height: '80vh', 
  display: 'grid', 
  placeItems: 'center', 
  fontSize: '40px',
  fontWeight: 'bold',
  color: 'red',
}

function App() {
  const {pathname} = useLocation();
  const displayHeaderAndFooter = !pagesWithoutHeaderandBottom.includes(pathname);

  return (
    <>
       {displayHeaderAndFooter && <HeaderEmployee />}
      {/* <HeaderCompany /> */}
      <main className={`container ${displayHeaderAndFooter ? '' : 'no-header'}`}>
        <Routes>
          <Route path='/' element={< Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/signup-employee' element={<SignupEmployee />} />
          <Route path='/signup-admin' element={<SignupAdmin />} />
          <Route path='/privatlivspolitik-og-betingelser' element={<PrivacyPolicyAndConditions />} />
          <Route path='/employee-profile-fill-in' element={<EmployeeProfileFillIn />} />
          <Route path='/admin-welcome' element={<AdminHome />} />
          <Route path='/admin-open-program' element={<AdminOpenProgram />} />
          <Route path='/admin-closed-program' element={<AdminClosedProgram />} />
          <Route path='/invite-participants' element={<InviteParticipants />} />
          <Route path='/matchmaking' element={<Matchmaking />} />
          <Route path='/matched-list/:userId' element={<MatchedList />} />
          
          <Route path='/apphome'  element={<AppHome/>}/>
          <Route path='/apphome1' element={<AppHome/>}/>
          <Route path='/apphome2' element={<AppHome/>}/>
          <Route path='/apphome3' element={<AppHome/>}/>
          <Route path='/apphome4' element={<AppHome/>}/>
          <Route path='/apphome5' element={<AppHome/>}/>
          {/* 404 */}
          <Route path='/*' element={<div style={errorMsgStyles}>Resource at {pathname} <br/>404 Not Found</div>} />
        </Routes>
      </main>
      {displayHeaderAndFooter && <Footer />}
    </>
  )
}


export default App
