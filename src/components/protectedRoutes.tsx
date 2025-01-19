import { useNavigate } from "react-router";
// import { useAuth } from "../contexts/authContext";
import { ReactNode, useEffect} from "react";


const ProtectedRoute = ({ children }: { children: ReactNode }) => {

    const navigate = useNavigate();
    const { user } = { user: null }; // useAuth();

    useEffect(() => {
        if (!user) navigate('/login');
    },);

    return children;
};

export default ProtectedRoute;
