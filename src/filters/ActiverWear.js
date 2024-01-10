import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function ActiveWear() {

    const [activeWear, setActiveWear] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/activewear")
        .then((response) => {
            setActiveWear(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderActiveWears = () => {
        return activeWear.map((product) => {
    
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
            {renderActiveWears()}
        </div>
     );
}

export default ActiveWear;