import { useNavigate } from "react-router-dom"

const ProtectedRouteTwo = ({isLoggedIn, children}) => {
    const navigate = useNavigate();
    return isLoggedIn ? navigate("/home") : children;
}

export default ProtectedRouteTwo