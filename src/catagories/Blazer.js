import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function Blazer() {

    const [blazer, setBlazer] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/blazer")
        .then((response) => {
            setBlazer(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderBlazers = () => {
        return blazer.map((product) => {
    
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
            {renderBlazers()}
        </div>
     );
}

export default Blazer;