import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext();

export const AuthProvider = ({ children  }) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (userData) => {
        setUser(userData);
        // Save user data to localStorage
        // if (userData.token) {
        //     localStorage.setItem("token", userData.token);
        // }
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        // Remove user data from localStorage
        //localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);