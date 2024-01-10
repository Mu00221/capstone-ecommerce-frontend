import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductContainer from "../reuseables/ProductContainer";
import '../style/listProducts.css'


function ProductSearch(props) {

    const { type } = useParams();
    const [search, setSearch] = useState([]);

    useEffect (() => {
        axios.get(`http://localhost:9092/product/type/${type}`)
        .then((response) => {
            setSearch(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [type]);

    

    const renderProducts = () => {
        return search.map((product) => {
    
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
        <div  >
            {renderProducts()}
        </div>
     );
}

export default ProductSearch;