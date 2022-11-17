import './App.css'
import {Routes, Route, Outlet} from "react-router-dom"
//import Blog from './pages/Blog'
import { useState } from 'react'
import User from './pages/User'
import Blogs from './pages/Blogs'

const Dashboard =()=>{
  return (
    <div className='App'>
      <h1>Dashboard</h1>

      <Outlet />
    </div>
  )
}


function App() {

  const [isLogin, setIsLogin]= useState(true) //ganti disini login /logout
  if (isLogin){
    return (
      <Routes>
        <Route path='/' element= {<h1>Dashboard</h1>} />
        <Route path='/users' element= {<User />} />
        <Route path='/blog' element= {<Blogs />} />
      </Routes>
    )
  }
  return (
    <Routes>
        <Route path='/' element= {<h1>Login Page</h1>} />
        <Route path='/about' element= {<h1>About Page</h1>} />
        <Route path='*' element= {<h1>Page not found</h1>} />
      </Routes>
  )






  // return (
  //   <Routes>
  //     <Route path='/' element={<h1>Hello</h1>} />
  //     <Route path='/dashboard' element={<Dashboard />} >
  //       <Route index element={<h3>Main Dashboard</h3>} />
  //       <Route path='user' element={<h3>User</h3>} />
  //       <Route path='message' element={<h3>Message</h3>} />
  //     </Route>
  //     <Route path='/blog/:id' element={<Blog />} />
      
  //   </Routes>
  // )
}

export default App
