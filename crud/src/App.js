
import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserCreate from './components/UserCreate'
import UserRead from './components/UserRead'
import UserSearch from './components/UserSearch'
import UserUpdate from './components/UserUpdate'
import Menu from './components/Menu'
// import Footer from './components/Footer'
export default class App extends Component {
  

  render() {
    return (
      <>
      <BrowserRouter>
      <Menu/>
      <h4 className='user'>User Management System</h4>
      <Routes>
<Route path="/" element={<UserRead/>}/>
<Route path="/create" element={<UserCreate/>}/>
<Route path="/update/:id" element={<UserUpdate/>}/> 
<Route path="/search" element={<UserSearch/>}/>  
<Route path="*" element={<h2> 404 page not found </h2>}/>     
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
      </>
    )
  }
}
