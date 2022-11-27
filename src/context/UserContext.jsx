import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

  const userLocalStorage = localStorage.getItem('user')

  const [user, setUser] = useState(JSON.parse(userLocalStorage))

  const storeUser = dataUser => {
    localStorage.setItem('user', JSON.stringify(dataUser))

    setUser(dataUser)
  }

  const cleanUser = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, storeUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  )
}