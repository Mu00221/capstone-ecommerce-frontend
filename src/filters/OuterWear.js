import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function OuterWear() {

    const [outerWear, setOuterWear] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/outerwear")
        .then((response) => {
            setOuterWear(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderOuterWears = () => {
        return outerWear.map((product) => {
    
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
            {renderOuterWears()}
        </div>
     );
}

export default OuterWear;