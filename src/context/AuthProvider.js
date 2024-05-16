import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false }); // Initialize with isAuthenticated property
    console.log("Authentication State in useAuth:", auth.isAuthenticated); // Log authentication state
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
