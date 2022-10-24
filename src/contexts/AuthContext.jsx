import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'



const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState()  

  function register(email, password){
    return auth.createUserEmailAndPassword(email, password)
  }

  function login(email, password){
    return auth.loginWithEmailAndPassword(email, password)
  }

  // useEffect(()=> {
  //   const unsubcribe = auth().onAuthStateChanged(user => {
  //       setCurrentUser(user)
  //       // setLoading(false)
  //   })

  //   return unsubcribe
  // }, [])
  

  const value={
    currentUser,
    register,
    login
  }
    
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
