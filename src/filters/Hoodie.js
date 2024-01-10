import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ProductContainer from '../reuseables/ProductContainer';
import '../style/listProducts.css'


function Hoodie(props) {

 

    const [hoodie, setHoodie] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/hoodie")
        .then((response) => {
            setHoodie(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderProducts = () => {
        return hoodie.map((product) => {
    
            return (
                
                <div className="card-info" key={product.productId}>
                    <Link to={`/product/${product.productId}`}>
                        <ProductContainer product = {product} />
                        
                    </Link>
                    
                </div>
            
            )
        })
    }
    return ( 
        <div >
            {renderProducts()}
        </div>
     );
}

export default Hoodie;