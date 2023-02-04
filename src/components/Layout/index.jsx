import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navbar, Footer } from '..'

const Layout = () => {
  return (
    <div className='layout'>
      <ToastContainer position='top-center' />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
