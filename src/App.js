import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css';
import Index from './pages';
import LoginPage from './pages/login_page';
import SigninPage from './pages/signin_page';
import HomePage from './pages/homePage.tsx';

const defaultUser = {
  username: 'TestUser',
  userID : '12345',
  name : 'MyName'
}
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/signin' element ={<SigninPage/>}/>
        <Route path='/home' element ={<HomePage user={defaultUser}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

