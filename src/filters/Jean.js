import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";
import axios from "axios";

function Jean() { 

    const [jean, setJean] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/jean")
        .then((response) => {
            setJean(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderJeans = () => {
        return jean.map((product) => {
    
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
            {renderJeans()}
        </div>
     );
}

export default Jean;