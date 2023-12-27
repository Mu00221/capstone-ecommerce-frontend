import Navbar from "./Navbar";
import React from "react";

function PageWrapper(props) {
    return ( 
        <div >
            <Navbar user={props.user} setUser={props.setUser}/>
            <div > {props.children}</div>
        </div>
     );
}

export default PageWrapper;