import axios from "axios";
import { useEffect, useState } from "react";
import '../style/myCart.css'
import { useNavigate } from "react-router-dom";

function MyCart(props) {

    const[cartOne, setCartOne] = useState([]);
    const [myCart, setMyCart] = useState([]);

    const navigator = useNavigate();
    

    useEffect(() => {
        const userId = localStorage.getItem("users")
        axios.get(`http://localhost:9092/cart/getUserCart/${userId}`)
        .then((response) => {
            setCartOne(response.data);
        })
        .catch((e) => {
            console.error("Error, the cart not found!", e);
        })
    },[])

    useEffect(() => {
        if(cartOne.cartId){
        axios.get(`http://localhost:9092/product/productOfCart/${cartOne.cartId}`)
        .then((response) => {
            setMyCart(response.data)
        })
        .catch((e) => {
            console.log(e);
        }) }
    }, [cartOne.cartId])

           



    const renderCartProducts = () => {
        return myCart.map((product) => {
            return(
                <div key={product.productId}>

<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={product.picOne}/></div>
                <div class="col-md-6 mt-1">
                    <h5>{product.type}</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>{product.review}</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br></br></span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For {product.gender}</span><span class="dot"></span><span>Casual<br></br></span></div>
                    <p class="text-justify text-truncate para mb-0">{product.details}<br></br></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{product.price * 0.7}</h4><span class="strike-text">{product.price * 0.3}</span>
                    </div>
                    <button className="btn btn-primary" onClick={
                        () => {
                            if(myCart) {
                         axios.post(`http://localhost:9092/product/remove/${product.productId}`)
                         .then((response) => {
                            navigator("/products")
                         })
                         .catch((e) => {
                            console.log(e);
                         })}
                        }
                    }>remove</button>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-md-3 image">
                                <img src={product.picOne}></img>
                            </div>
                          <div className="col-md-8">
                          <div className="details">
                                <h3>Title:</h3><br></br>
                                <h3>Price:</h3><br></br>
                                <h3>Color:</h3><br></br>
                                <p>Description:</p>
                                <button className="btn btn-info btn-sm">Delete</button>
                            </div>
                          </div>
                        </div>
                    </div>
                     */}
                    
                </div>
            )
        }) 
    }

    return ( <div>
        {renderCartProducts()}
             </div> );
}

export default MyCart;