import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (


    <nav className='flex flex-col justify-between items-center py-8 w-52 bg-green-600'>
      <div>
        <div>Bienvenid@</div>
        <div>Mariana</div>
      </div>

      <div className='flex flex-col gap-8'>
        <Link to="/">Login</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/heroes/1">Heroe</Link>
        <Link to="/profile">Perfil</Link>
      </div>

      <div>
        <button>Logout</button>
      </div>
    </nav>


  )
}

export default Sidebar