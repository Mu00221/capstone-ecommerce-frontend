import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ProductContainer from './../reuseables/ProductContainer';
// import '../style/listProducts.css'

function ProductList(props) {

 

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/product/get")
        .then((response) => {
            setProducts(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderProducts = () => {
        
        return products.map((product) => {
    
            return (
             
                <div  class="card-info"  key={product.productId}>

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

export default ProductList;