import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const navigate = useNavigate()
    
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token")){
            setIsAuth(true)
        }
    }, []);

    if(isAuth){
        return children;
    }else{
        navigate("/test-links")
    }
}

export default PrivateRoute;
