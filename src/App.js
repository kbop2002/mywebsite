import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import Index from './pages';
import LoginPage from './pages/login_page';
import SigninPage from './pages/signin_page';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/signin' element ={<SigninPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

