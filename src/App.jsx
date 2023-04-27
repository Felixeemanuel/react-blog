import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetails from './pages/BlogDetails'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import CreateBlog from './pages/CreateBlog'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='create' element={<CreateBlog />} />
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='/:id' element={<BlogDetails />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NoPage />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
