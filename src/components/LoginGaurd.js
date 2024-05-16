import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginGaurd = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.username
            ? <Navigate to="/" state={{from: location}} replace />
            : <Outlet />
    );
}

export default LoginGaurd