import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const {auth} = useSelector(state => state)

    return (auth.autenticated)
        ? children
        : <Navigate to="/login" />
}
