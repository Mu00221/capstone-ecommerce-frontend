import axios from "axios";
import { useState, useEffect } from 'react';
import '../style/myTransaction.css'

function MyTransaction() {

    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("users");
        axios.get(`http://localhost:9092/orders/myTransactions/${userId}`)
        .then((response) => {
           setTransaction(response.data); 
        })
        .catch((e) => {
            console.log(e);
        })
    }, []);

    const renderUserProducts = () => {
        return transaction.map((pro, index) => {
            return(
                <div key={index}>
                   <div class="container4">
      <div class="left-side">
        <img src={pro[4]} alt="" id="transaction-pic"></img>
      </div>
      <div class="right-side">
        <p id="perfume">{pro[0]}</p>
        <h1 id="header">{pro[1]}</h1>
        <p id="description">{pro[2]}</p>
        <div class="price">
          <h1 id="number-discount">${pro[3]}</h1>
          
        </div>
        <button class="cart-btn ">
          <p id="btn-text ">Order Again</p>
        </button>          
      </div>
    </div>
                    
                </div>
            )
        }) 
    }
    return ( 
        <div>
            {renderUserProducts()}
        </div>
     );
}

export default MyTransaction;