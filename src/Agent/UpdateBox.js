import '../style/udateBox.css'

function UpdateBox(props) {

    const handleGetIdSubmit = (e) => {
        e.preventDefault();
        const productId = e.target.search.value.trim(); 
        if(productId) {
      
          //redirect
          window.location.href = `updateProducts/byId/${productId}`;
        }
      }

    return ( <div className='main'>
        <div className="container">
          <p>please enter the product id!</p>
         <form onSubmit = {handleGetIdSubmit}>
        <input type="text" name="search" placeholder='product-Id' ></input>
      </form>
      </div>
    </div> );
}

export default UpdateBox;