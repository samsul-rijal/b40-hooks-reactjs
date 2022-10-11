//import useEffect here

import {useNavigate} from 'react-router-dom'


export default function Home() {

    const navigate = useNavigate()
    
    return (
        <div className="text-center h1 bg-secondary text-light py-5">
            Silahkan Login
            <div>
                <button onClick={() => navigate("/login")} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}
