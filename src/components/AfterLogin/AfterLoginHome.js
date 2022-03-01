import React, { useContext } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import userContext from '../../context/user/usercontext'
import Quiz from './Quiz'
import Footer from './Footer'
import Main from './Main'
import Scorecard from './Scorecard'
import Test from './Test'



function AfterLoginHome0() {
  return (
    <div>

    </div>
  )
}



function AfterLoginHome() {
  const a = useContext(userContext)

  return (
    <>
      <div className='container-100'>
        <Router>
       
          <Routes>


            <Route path="/*" element={ <Main />} />
            <Route exact path="/testgk" element={ <Test type={'gk'}/>} />
            <Route exact path="/testmath" element={ <Test type={'math'}/>} />
            <Route exact path="/testgs" element={ <Test type={'gs'}/>} />

          </Routes>

        </Router>
        {/* <Footer /> */}
      </div>

    </>
  )
}

export default AfterLoginHome
