import React, { useEffect, useState } from "react";

function PrivateRoute({ children }) {
    
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token")){
            setIsAuth(true)
        }
    }, []);

    if(isAuth){
        return children;
    }else{
        return null
    }
}

export default PrivateRoute;
