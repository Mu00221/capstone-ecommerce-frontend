// import ProductContainer from "../reuseables/ProductContainer";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function Products (){

//     const data = useParams();
//     const [typeproducts, setTypeProducts] = useState([]);
//     const [type, setType] = useState();
    

//     useEffect(() => {

//         async function fetchProductTypes(){

//             try {
//                 const response = await axios.get(`http://localhost:9092/product/type/${data}`)
//                 setTypeProducts(response.data);
//             } catch (error){
//                 console.error('Error fetching products', error)
//             }
//         }
//         fetchProductTypes();
//     }, [])

//     return (
// <div className="select-drop-container" >
// <div className="select-drop-top">
//            <select onClick={(e) => setType(e.target.value)} value = {data} >
//                <option value = "HOODIE">HOODIES</option>
//                <option value = "SHIRT" >SHIRTS</option>
//                <option value = "PANT">PANTS</option>
//                <option value = "SHORT">SHORTS</option>
//             </select>
//             </div>
//         <div>
//             {typeproducts.map(product => (
//                <ProductContainer key = {product.productId} product = {product}/>

//             ))}
          
//         </div>
      
//         </div>
       
      
//     )
// }

// export default Products;