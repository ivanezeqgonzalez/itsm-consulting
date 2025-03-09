import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AllUsers from './views/AllUsers.tsx'
import UserDetails from './views/UserDetails.tsx'
import PostUser from './views/PostUser.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/allUsers' element={<AllUsers />}/>
        <Route path='/userDetails' element={<UserDetails />}/>
        <Route path='/postUser' element={<PostUser />}/>
        <Route path='/*' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
