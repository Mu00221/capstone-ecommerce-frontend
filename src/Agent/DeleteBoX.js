import '../style/deleteBox.css'
function DeleteBox() {


    

    const handleDeleteIdSubmit = (e) => {

        
        e.preventDefault();
        const productId = e.target.delete.value.trim(); 
        if(productId) {
      
          //redirect
          window.location.href = `deleteProducts/Id/${productId}`;
        }
       }
       
    return ( <div className="main12">
      <div className="container" id="container12">
        <p>please enter the product id!</p>
           <form onSubmit = {handleDeleteIdSubmit}>
        <input type="text" name="delete" ></input>
           </form>
           </div>
         </div> );
}

export default DeleteBox;