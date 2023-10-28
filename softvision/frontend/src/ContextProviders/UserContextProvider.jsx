import React, { useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    console.log(user)

    const loginUser = (userData) => {
      setUser(userData);
    };
  
    const logoutUser = () => {
      setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
          {children}
        </UserContext.Provider>
      );
}