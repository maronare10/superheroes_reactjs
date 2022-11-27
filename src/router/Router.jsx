import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Heroes from '../pages/Heroes'
import Hero from '../pages/Hero'
import Layout from '../components/Layout'
import Profile from '../pages/Profile'
import { UserProvider } from '../context/UserContext'
import PrivateRoutes from './PrivateRoutes'


const Router = () => {
  return (

    <UserProvider>
      <BrowserRouter>

        <Layout>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route element={<PrivateRoutes/>} >
              <Route path='/heroes' element={<Heroes />} />
              <Route path='/heroes/:id' element={<Hero />} />
              <Route path='/profile' element={<Profile />} />
            </Route>

          </Routes>
        </Layout>

      </BrowserRouter>
    </UserProvider>

  )
}

export default Router