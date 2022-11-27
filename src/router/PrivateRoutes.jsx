import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const PrivateRoutes = () => {

  const {user} = useContext(UserContext)

  if(!user){
    return <Navigate to='/' />
  }
  return (
    <Outlet/>
  )
}

export default PrivateRoutes