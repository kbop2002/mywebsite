import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css';
import Index from './pages';
import LoginPage from './pages/login_page.tsx';
import SigninPage from './pages/signin_page.tsx';
import HomePage from './pages/homePage.tsx';
import OrderPage from './pages/orderPage.tsx';
import OrderConfirmation from './pages/orderConfirmation.tsx';
import PastOrders from './pages/pastOrders.tsx';
import ProfilePage from './pages/profilePage.tsx';
import AdminPortal from './pages/admin.tsx';
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
        <Route path='/order' element ={<OrderPage/>}/>
        <Route path='/orderConfirmation' element ={<OrderConfirmation/>}/>
        <Route path='/pastO' element ={<PastOrders/>}/>
        <Route path='/profile' element ={<ProfilePage/>}/>
        <Route path='/admin' element ={<AdminPortal/>}/>
      </Routes>
    </BrowserRouter>
  )
}

