import '../style/EditeBox.css'
function EditeBox() {


    const handleGetIdSubmit = (e) => {
        e.preventDefault();
        const userId = e.target.search.value.trim(); 
        if(userId) {
      
          //redirect
          window.location.href = `updateUser/byId/${userId}`;
        }
       }

    return (  <div className="main13">
    <div className="container" id="container13">
      <p>please enter the product id!</p>
         <form onSubmit = {handleGetIdSubmit}>
      <input type="text" name="search" ></input>
         </form>
         </div>
       </div> );
}

export default EditeBox;