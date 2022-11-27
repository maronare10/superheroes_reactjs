import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import { UserContext } from '../context/UserContext'

const Sidebar = () => {

const navigate = useNavigate()

const {user, cleanUser} = useContext(UserContext)

  const handleLogout = () =>{
    
    cleanUser()

    navigate('/')

  }

  if(!user) {
    return null
  }

  return (


    <nav className='flex flex-col justify-between items-center py-8 w-52 bg-green-600'>
      <div>
        <div>Bienvenid@</div>
        <div>{user.username }</div>
      </div>

      <div className='flex flex-col gap-8'>
        <Link to="/heroes">Heroes</Link>
        <Link to="/heroes/1">Heroe</Link>
        <Link to="/profile">Perfil</Link>
      </div>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>


  )
}

export default Sidebar