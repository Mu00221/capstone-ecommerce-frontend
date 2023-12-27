import '../style/deleteBox.css'

function RemoveBox() {

    const handleDeleteIdSubmit = (e) => {

        
        e.preventDefault();
        const userId = e.target.delete.value.trim(); 
        if(userId) {
      
          //redirect
          window.location.href = `deleteUsers/Id/${userId}`;
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

export default RemoveBox;