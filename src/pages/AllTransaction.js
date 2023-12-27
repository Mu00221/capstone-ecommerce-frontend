import axios from "axios";
import { useEffect, useState } from "react";
import '../style/allTransaction.css'

function AllTransaction(props) {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, [])

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:9092/product/allTransaction");
    //     const data =  response.json;
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
    // }
    useEffect(() => {
        axios.get("http://localhost:9092/product/allTransaction")
        .then((response) => {
            setProducts(response.data);
            console.log(response.data)
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    


    return ( <div>
        { products.map((item, index) => ( <div className="container" id="table">

<table class="table" key={index}>
  <thead>
    <tr>
      <th scope="col">user_id</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">product_id</th>
      <th scope="col">type</th>
      <th scope="col">color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{item[0]}</th>
      <td>{item[1]}</td>
      <td>{item[2]}</td>
      <td>{item[3]}</td>
      <td>{item[4]}</td>
      <td>{item[5]}</td>
    </tr>
  </tbody>
</table>
    
       
      </div>
     ))}
     </div>  );
}

export default AllTransaction;