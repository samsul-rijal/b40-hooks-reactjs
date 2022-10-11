
import { useContext } from "react";
import { UserContext } from "./context/userContex";
import {useNavigate} from "react-router-dom"

export default function WelcomeAdmin() {

    const [dataUser, dispatch] = useContext(UserContext);
    console.log('dataContext', dataUser);
    
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        });
        
        navigate("/login")
    }

    return (
        <div className="vh-100 bg-warning mb-0">
            <h2>Page Admin</h2>
            <h5>Welcome {dataUser.user.email}</h5>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
    )
}
