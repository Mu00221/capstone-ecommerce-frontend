import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";

function Coat() {

    const [coat, setCoat] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/coat")
        .then((response) => {
            setCoat(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderCoats = () => {
        return coat.map((product) => {
    
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
            {renderCoats()}
        </div>
     );
}

export default Coat;