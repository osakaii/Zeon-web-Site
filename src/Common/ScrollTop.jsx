import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop(props) {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    return null;
}

export default ScrollTop;
