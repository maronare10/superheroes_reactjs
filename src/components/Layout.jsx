import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />

      <main className='bg-lime-100 w-full'>
        {children}
      </main>

    </div>
  )
}

export default Layout