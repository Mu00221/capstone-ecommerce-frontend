import axios from "axios";
// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteProduct(props) {

    const {productId} = useParams();

    const navigator = useNavigate();

   
    const deleteProductHandler = () => {
        axios.delete(`http://localhost:9092/product/delete/${productId}`)
        .then((response) => {
            navigator('/')
        })
    }
    return ( <div>
      {deleteProductHandler()}
             </div> );
}

export default DeleteProduct;