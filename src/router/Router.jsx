import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Heroes from '../pages/Heroes'
import Hero from '../pages/Hero'
import Layout from '../components/Layout'


const Router = () => {
  return (
    <BrowserRouter>


      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/heroes' element={<Heroes />} />
          <Route path='/heroes/:id' element={<Hero />} />
        </Routes>
      </Layout>



    </BrowserRouter>
  )
}

export default Router