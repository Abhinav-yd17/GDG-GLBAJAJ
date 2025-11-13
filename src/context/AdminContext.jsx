import React, { createContext, useContext, useState } from 'react'

const AdminContext = createContext()

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  const login = (password) => {
    // Simple admin check - in real app, use proper authentication
    if (password === 'admin123') {
      setIsAdmin(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
  }

  const value = {
    isAdmin,
    login,
    logout,
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}