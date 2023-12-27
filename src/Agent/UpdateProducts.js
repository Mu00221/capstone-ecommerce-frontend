
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import '../style/EditProduct.css'

function UpdateProducts() {

   const {productId} = useParams();
    const  [updateProduct, setUpdateProduct] = useState({
        
        gender: "",
        type: "",
        color: "",
        size: "",
        material: "",
        quantity: undefined,
        price: undefined,
        picOne: "",
        picTwo: "",
        picThree: "",
        picFour: ""
    })

    const navigator = useNavigate();

    const typeOnChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

       const tempUpdate = { ...updateProduct };
        tempUpdate[name] = value;
        setUpdateProduct(tempUpdate);
    }

     

    useEffect(() => {
        axios.get(`http://localhost:9092/product/productById/${productId}`)
        .then((response) => {
            setUpdateProduct(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [productId]);

    const updateProductSubmitHandler = () => {
        axios.put(`http://localhost:9092/product/update/${productId}`, updateProduct)
        .then((response) => {
            navigator("/")
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return ( <div className='top'>


        <div className='white-panel' >
            <div className='title'>
                <h1>Edite-Product</h1>
                <hr></hr>
            </div>

    <div class="row">

        <div class="col" id='cover-input'>
        <input type="text" class="form-control" placeholder="Product name" name='name' onChange={typeOnChangeHandler} value={updateProduct.name}/>
        <input type="text" class="form-control" placeholder="type" name='type' onChange={typeOnChangeHandler} value={updateProduct.type}/>
        <input type="text" class="form-control" placeholder="color" name='color' onChange={typeOnChangeHandler} value={updateProduct.color}/>
        <input type="text" class="form-control" placeholder="size" name='size' onChange={typeOnChangeHandler} value={updateProduct.size}/>
        <input type="text" class="form-control" placeholder="material" name='material' onChange={typeOnChangeHandler} value={updateProduct.material}/>
        <input type="text" class="form-control" placeholder="Gender" name='gender' onChange={typeOnChangeHandler} value={updateProduct.gender}/>
        <input type="text" class="form-control" placeholder="details" name='details' onChange={typeOnChangeHandler} value={updateProduct.deatils}/>
            
            </div>
            <div class="col" id='cover-input'>
            <input type="text" class="form-control" placeholder="price" name='price' onChange={typeOnChangeHandler} value={updateProduct.price}/>
        <input type="text" class="form-control" placeholder="picOne" name='picOne' onChange={typeOnChangeHandler} value={updateProduct.picOne}/>
        <input type="text" class="form-control" placeholder="picTwo" name='picTwo' onChange={typeOnChangeHandler} value={updateProduct.picTwo}/>
        <input type="text" class="form-control" placeholder="picThree" name='picThree' onChange={typeOnChangeHandler} value={updateProduct.picThree}/>
        <input type="text" class="form-control" placeholder="picFour" name='picFour' onChange={typeOnChangeHandler} value={updateProduct.picFour}/>
        <input type="number" class="form-control" placeholder="Quantity" name='quantity' onChange={typeOnChangeHandler} value={updateProduct.quantity}/>
        <input type="text" class="form-control" placeholder="returnPolicy" name='returnPolicy' onChange={typeOnChangeHandler} value={updateProduct.returnPolicy}/>
            
            </div>    
      </div>

     <div>
        <button class="btn btn-info btn-block " id='enter' onClick={updateProductSubmitHandler}>Submit</button>
     </div>

        </div>
    </div> );
}

export default UpdateProducts;