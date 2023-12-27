import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/addProduct.css'




function AddProducts(props) {

    const navigator = useNavigate();
    const [item, setItem] = useState({
        productId: undefined,
        gender: "",
        type: '',
        color: '',
        size: undefined,
        material: '',
        quantity: undefined,
        price: undefined,
        sold: false,
        picOne: '',
        picTwo: '',
        picThree: '',
        picFour: ''

    });

    const typeOnChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

       const tempItem = { ...item };
        tempItem[name] = value;
        setItem(tempItem);
    }

    const productSubmitHandler = () => {
        axios.post("http://localhost:9092/product/add", item)
        .then((response) => {
            navigator("/")
        })
        .catch((e) => {
            console.log(e);
        })
    }


    return (<div className='top01'>


    <div className='white-panel01' >
        <div className='title01'>
            <h1>Post Product</h1>
            <hr></hr>
        </div>

<div class="row">

        <div class="col" id='cover-input01'>
        <input type="text" class="form-control" placeholder="Product name" name='name' onChange={typeOnChangeHandler} value={item.name}/>
        <input type="text" class="form-control" placeholder="type" name='type' onChange={typeOnChangeHandler} value={item.type}/>
        <input type="text" class="form-control" placeholder="color" name='color' onChange={typeOnChangeHandler} value={item.color}/>
        <input type="text" class="form-control" placeholder="size" name='size' onChange={typeOnChangeHandler} value={item.size}/>
        <input type="text" class="form-control" placeholder="material" name='material' onChange={typeOnChangeHandler} value={item.material}/>
        <input type="text" class="form-control" placeholder="Gender" name='gender' onChange={typeOnChangeHandler} value={item.gender}/>
        <input type="text" class="form-control" placeholder="details" name='details' onChange={typeOnChangeHandler} value={item.deatils}/>

        </div>
        <div class="col" id='cover-input01'>
        <input type="text" class="form-control" placeholder="price" name='price' onChange={typeOnChangeHandler} value={item.price}/>
        <input type="text" class="form-control" placeholder="picOne" name='picOne' onChange={typeOnChangeHandler} value={item.picOne}/>
        <input type="text" class="form-control" placeholder="picTwo" name='picTwo' onChange={typeOnChangeHandler} value={item.picTwo}/>
        <input type="text" class="form-control" placeholder="picThree" name='picThree' onChange={typeOnChangeHandler} value={item.picThree}/>
        <input type="text" class="form-control" placeholder="picFour" name='picFour' onChange={typeOnChangeHandler} value={item.picFour}/>
        <input type="number" class="form-control" placeholder="Quantity" name='quantity' onChange={typeOnChangeHandler} value={item.quantity}/>
        <input type="text" class="form-control" placeholder="returnPolicy" name='returnPolicy' onChange={typeOnChangeHandler} value={item.returnPolicy}/>

        </div>    
  </div>

 <div>
    <button class="btn btn-info btn-block " id='enter01' onClick={productSubmitHandler}>Submit</button>
 </div>

    </div>
      </div>  );
}

export default AddProducts;