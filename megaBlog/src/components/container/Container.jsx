import React from "react";

// container is used for styling
function Container({children}){
    return (
        <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
    )
}

export default Container