import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const accessToken = await refresh();
                if (accessToken) {
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    setAuth(null); // Clear authentication state if refresh fails
                }
            } catch (err) {
                console.error(err);
                setIsLoading(false);
                setAuth(null); // Clear authentication state if refresh fails
            }
        }
    
        // Check for refresh token and verify if exists
        const storedRefreshToken = document.cookie.split('; ').find(row => row.startsWith('jwt='));
        if (storedRefreshToken) {
            verifyRefreshToken();
        } else {
            setIsLoading(false);
        }
    }, [refresh, setAuth, auth]); // Include auth as a dependency
    


    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin