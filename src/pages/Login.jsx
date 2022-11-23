import React from 'react'


const Login = () => {
  return (
    <div className='h-full flex justify-center items-center'>

      <form className='flex flex-col w-60 gap-2'>

        <h2 className='text-center text-2xl mb-4'>Accede a tu cuenta</h2>

        <input 
        type="text"
        name= "username"
        className='border border-gray-300 px-2 py-2 rounded-xl'
        
        
        />

        <button className='rounded border bg-green-500 px-2 py-2'>Acceder</button>




      </form>


    </div>
  )
}

export default Login