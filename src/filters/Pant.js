import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function Pant() {

    const [pant, setPant] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/pant")
        .then((response) => {
            setPant(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderPants = () => {
        return pant.map((product) => {
    
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
            {renderPants()}
        </div>
     );
}

export default Pant;