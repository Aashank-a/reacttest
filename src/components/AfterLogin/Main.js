import React from 'react'
import Quiz from './Quiz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import Scorecard from './Scorecard'
import Profile from './Profile'
import Navbar from './Navbar'
import Footer from './Footer'

function Main() {
  return (
    <>
      <Navbar />
      <Sidebar />


      <Routes>
        <Route path="/" element={
          <>
          <Quiz test={'GK'}/>
          <Quiz test={'Mathematics'}/>
          <Quiz test={'GS'}/>
          </>
        } />
        <Route path="/score" element={<Scorecard />} />
        <Route exact path="/profile" element={<Profile />} />

      </Routes>
      <Footer />

    </>
  )
}

export default Main
