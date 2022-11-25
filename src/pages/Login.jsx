import {useState} from 'react'


const Login = () => {

  const [userData, setUserData] = useState({username: ''})
  
  const handleInput = (e) => {
    console.log (e.target.value )

    const value = e.target.value
    const name = e.target.name

    setUserData ({ ...userData, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log ('Enviando formulario...')

    //fetch API:

    const url = 'https://637ffbbb8efcfcedacfae701.mockapi.io/api/v1/users'

    const options = {
      method: 'POST',
      body: JSON.stringify({ username: userData.username }),
      headers: { 'Content-type': 'application/json'},
      
    }

      const response = await fetch(url, options)

      const data = await response.json()
    
      


  }


  return (
    <div className='h-full flex justify-center items-center'>

      <form className='flex flex-col w-60 gap-2' onSubmit = {handleSubmit}>

        <h2 className='text-center text-2xl mb-4'>Accede a tu cuenta</h2>

        {JSON.stringify(userData)}

        <input 
        type="text"
        name= "username"
        className='border border-gray-300 px-2 py-2 rounded-xl'
        onChange = {handleInput}
        />

        <button className='rounded border bg-green-500 px-2 py-2'>Acceder</button>

      </form>


    </div>
  )
}

export default Login