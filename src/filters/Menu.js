import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function Menu() {

    const [hoodies, setHoodies] = useState();


    useEffect(() => {
        axios.get("http://localhost:9092/product/hoodie")
        .then((response) => {
            setHoodies(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [])

    const renderHoodies = () => {
        return hoodies
    }


    return ( <div>
         
    </div> );
}

export default Menu;