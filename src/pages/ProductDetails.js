import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../style/cardDetails.css'


function ProductDetails(props) {

    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [cart, setCart] = useState([]);

    const navigator = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:9092/product/productById/${productId}`)
        .then(response => {
            setProduct(response.data)
        })
        .catch((e) => {
            console.error("Error, product not found!" , e)
        })
    }, [productId])

    useEffect(() => {
        const userId = localStorage.getItem("users")
        axios.get(`http://localhost:9092/cart/getUserCart/${userId}`)
        .then((response) => {
            setCart(response.data);
        })
        .catch((e) => {
            console.error("Error, the cart not found!", e);
        })
    }, [])
    
    if(!product) {
        return <div>Loading...</div>
                 }

    const addToCartHandler = () => {
        axios.post(`http://localhost:9092/product/productO/${product.productId}/cartO/${cart.cartId}`)
        .then((res) => {
          navigator("/products")  
        })
    }

    const purchaseProductHandler = () => {
        const userId = localStorage.getItem("users");
        axios.post(`http://localhost:9092/orders/productO/${product.productId}/userO/${userId}`)
        .then((response) => {
            navigator('/products')
        })
    }



    return (
        <div>
    <div class="container my-5">
    <div class="row">
        <div class="col-md-5">
            <div class="main-img">
                <img class="img-fluid" src={product.picOne} alt="ProductS"/>
                <div class="row my-3 previews">
                    <div class="col-md-3">
                        <img class="w-100" src={product.picTwo} alt="Sale"/>
                    </div>
                    <div class="col-md-3">
                        <img class="w-100" src={product.picThree} alt="Sale"/>
                    </div>
                    <div class="col-md-3">
                        <img class="w-100" src={product.picFour} alt="Sale"/>
                    </div>
                    <div class="col-md-3">
                        <img class="w-100" src={product.picOne} alt="Sale"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="main-description px-2">
                <div class="category text-bold">
                    Category: {product.gender}
                </div>
                <div class="product-title text-bold my-3">
                    {product.name}
                </div>


                <div class="price-area my-4">
                    <p class="old-price mb-1"><del>${product.price}</del> <span class="old-price-discount text-danger">(20% off)</span></p>
                    <p class="new-price text-bold mb-1">${product.price * 0.8}</p>
                    <p class="text-secondary mb-1">(Additional tax may apply on checkout)</p>

                </div>


                <div class="buttons d-flex my-5">
                    <div class="block">
                        <a href="#" class="shadow btn custom-btn " onClick={purchaseProductHandler}>Buy-Now</a>
                    </div>
                    <div class="block">
                        <button class="shadow btn custom-btn" onClick={addToCartHandler}>Add to cart</button>
                    </div>

                    <div class="block quantity">
                        <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity"/>
                    </div>
                </div>




            </div>

            <div class="product-details my-4">
                <p class="details-title text-color mb-1">Product Details</p>
                <p class="description">{product.details} </p>
            </div>
          
                     <div class="row questions bg-light p-3">
                <div class="col-md-1 icon">
                    <i class="fa-brands fa-rocketchat questions-icon"></i>
                </div>
                <div class="col-md-11 text">
                    Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
                </div>
            </div>

            <div class="delivery my-4">
                <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                <p class="text-secondary">Order now to get this product delivery</p>
            </div>
            <div class="delivery-options my-4">
                <p class="font-weight-bold mb-0"><span><i class="fa-solid fa-filter"></i></span> <b>Delivery options</b> </p>
                <p class="text-secondary">View delivery options here</p>
            </div>
            
         
        </div>
    </div>
</div>



<div class="container similar-products my-4">
    <hr></hr>
    <p class="display-5">Similar Products</p>

    <div class="row">
        <div class="col-md-3">
            <div class="similar-product">
                <img class="w-100" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Preview"/>
                <p class="title">Lovely black dress</p>
                <p class="price">$100</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="similar-product">
                <img class="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview"/>
                <p class="title">Lovely Dress with patterns</p>
                <p class="price">$85</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="similar-product">
                <img class="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview"/>
                <p class="title">Lovely fashion dress</p>
                <p class="price">$200</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="similar-product">
                <img class="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview"/>
                <p class="title">Lovely red dress</p>
                <p class="price">$120</p>
            </div>
        </div>
    </div>
</div>

</div>

 );
}

export default ProductDetails;