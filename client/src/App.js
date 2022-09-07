import React from 'react'
import Navbar  from './componente/Navbar'
import Home  from './componente/Home'
import {Routes,Route} from 'react-router-dom'
import  Contact  from './componente/Contact'
import Signup from './componente/Signup/index'
import Jobseeker from './componente/Signup/Jobseeker'
import JobSeekersList from './componente/JobSeekersList'
import Login from './componente/Login/index'
import ForgotPassword from './componente/ForgotPassword'
import Category from './componente/Category'
import Category2 from './componente/Category2'
import Bookingpage from './componente/Bookingpage'
import Main from './componente/Main'
import Profilepage from './componente/AfterLoginFile/Profilepage'

export const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/JobSeekersList' element={<JobSeekersList />} ></Route>
        {/* <Route path='/Forgotpwd' element={<ForgotPassword />} ></Route> */}
        <Route path='/Category' element={<Category />} />
        <Route path='/Category2' element={<Category2 />} />
        <Route path='/Bookingpage' element={<Bookingpage />} />
        <Route path='/Jobseeker' element={<Jobseeker/>} />
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Profilepage' element={<Profilepage/>} />
      </Routes>  
    </>
  )
}

export default App

