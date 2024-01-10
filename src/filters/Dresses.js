import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function Dresses() {

    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/dresses")
        .then((response) => {
            setDresses(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderDresses = () => {
        return dresses.map((product) => {
    
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
            {renderDresses()}
        </div>
     );
}

export default Dresses;