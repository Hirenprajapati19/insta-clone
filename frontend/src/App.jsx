// import React, { createContext ,useState} from "react";
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'
// import Profile from './components/Profile'
// import './App.css'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Createpost from './components/Createpost'
// import { LoginContext } from './context/LoginContext'
// import Modal from "./components/Modal";
// import UserProfile from "./components/UserProfile";
// import MyFolliwngPost from "./components/MyFollowingPost";

import { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./screens/Home"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Profile from "./screens/Profile"
import Createpost from "./screens/Createpost"
import UserProfile from "./components/UserProfile"
import MyFolliwngPost from "./screens/MyFollowingPost"
import { ToastContainer } from "react-toastify"
import { LoginContext } from "./context/LoginContext"
import Navbar from "./components/Navbar"


const App = () => {
  const [userLogin, setUserLogin] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className='App'>
        <LoginContext.Provider value={{ setUserLogin,setModalOpen }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route exect path="/profile" element={<Profile />} />
            <Route path="/createpost" element={<Createpost />} />
            <Route path="/profile/:userid" element={<UserProfile />} />
            <Route path="/myfollwingpost" element={<MyFolliwngPost />} />
          </Routes>
          <ToastContainer theme='dark' />
          {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        </LoginContext.Provider>

      </div>
    </BrowserRouter>
  )
}

export default App
