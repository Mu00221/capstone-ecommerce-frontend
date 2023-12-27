import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "../Importants/ProductContainer";
import { Link } from "react-router-dom";

function TShirt() {

    const [tshirt, setTshirt] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/t-shirt")
        .then((response) => {
            setTshirt(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderTshirt = () => {
        return tshirt.map((product) => {
    
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
            {renderTshirt()}
        </div>
     );
   
}

export default TShirt;