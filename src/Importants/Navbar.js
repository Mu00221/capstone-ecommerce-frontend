import React from "react"
import { useNavigate } from "react-router-dom"
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/simpleNav.css';

import { navbar, nav } from 'bootstrap';





function Navbar(props) {

    const navigator = useNavigate();

const signOut = () => {
    localStorage.removeItem("users");
    props.setUser({
        userId: undefined,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        admin: false,
        photo: ''
    })
    navigator("/")
}

const handleSearchSubmit = (e) => {
  e.preventDefault();
  const type = e.target.search.value.trim(); 
  if(type) {

    //redirect
    window.location.href = `products/type/${type}`;
  }
 }

 

const renderNavbar = () => {
  if(props.user.userId !== undefined && props.user.admin === true) {
    return (
      <div className="main-container " >

      <div className="form-container">
    <form id="form" onSubmit = {handleSearchSubmit}>
        <input className="search-input" type="text" name="search" placeholder="search" ></input>
    </form>
      </div>


        <div className="header bg-info" >
          <div className="header">
            <div className="row">
              <div className="col-md-2  text-center">
                <div className="title">
                <a class="navbar-brand "  href="/" id="logo" >Claim</a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                </div>
              </div>

              <div className="col-md-6 ">
              <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">Home</a>
                    </li>

                
                    <li class="nav-item">
                      <a class="nav-link" href="products">view-all</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Men
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="/hoodies">Hoodies</a>
                        <a class="dropdown-item" href="/t-shirts">T-shirts</a>
                        <a class="dropdown-item" href="/coats">Coats</a>
                        <a class="dropdown-item" href="/pants">Pants</a>
                      </div>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Woman
                       </a>
                       <div class="dropdown-menu">
                            <a class="dropdown-item" href="/dresses">Dresses</a>
                            <a class="dropdown-item" href="/blazers">Blazers</a>
                            <a class="dropdown-item" href="/">Hoodies</a>
                            <a class="dropdown-item" href="/jeans">Jeans</a>
                       </div>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Kids
                      </a>
                      <div class="dropdown-menu">
                          <a class="dropdown-item" href="/outers">outerwear</a>
                          <a class="dropdown-item" href="/actives">activewear</a>
                          <a class="dropdown-item" href="/allUsers">View-Users</a>
                      
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              </div>
              <div className="col-md-2">
              <div class="dropdown10">
                <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  products
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/addProducts">add</a>
                  <a class="dropdown-item" href="/updateProduct">update</a>
                  <a class="dropdown-item" href="/deleteProduct">remove</a>
                 
                </div>
                
              </div>

              <div class="dropdown11">
                <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  users
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/allUsers">view-users</a>
                  <a class="dropdown-item" href="/updateUsers">update</a>
                  <a class="dropdown-item" href="/deleteUser">remove</a>
                 
                </div>
                
              </div>
              
                </div>

              <div className="col-md-2">
              <div class="dropdown">
                <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  profile
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/profile">profile</a>
              
                  <a class="dropdown-item" onClick={signOut}>signout</a>
                 
                </div>
              </div>

              
              
                </div>
              </div>
            </div>
          </div>
 
</div>
    )
  }else if(props.user.userId !== undefined && props.user.agent === true){
        return (
          <div className="main-container " >

          <div className="form-container">
        <form id="form" onSubmit = {handleSearchSubmit}>
            <input className="search-input" type="text" name="search" placeholder="search" ></input>
        </form>
          </div>

  
            <div className="header bg-info" >
              <div className="header">
                <div className="row">
                  <div className="col-md-2  text-center">
                    <div className="title">
                    <a class="navbar-brand "  href="/" id="logo" >Claim</a>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                       </button>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                  <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="/">Home</a>
                        </li>
    
                    
                        <li class="nav-item">
                          <a class="nav-link" href="products">view-all</a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Men
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="/hoodies">Hoodies</a>
                            <a class="dropdown-item" href="/t-shirts">T-shirts</a>
                            <a class="dropdown-item" href="/coats">Coats</a>
                            <a class="dropdown-item" href="/pants">Pants</a>
                          </div>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Woman
                           </a>
                           <div class="dropdown-menu">
                                <a class="dropdown-item" href="/dresses">Dresses</a>
                                <a class="dropdown-item" href="/blazers">Blazers</a>
                                <a class="dropdown-item" href="/">Hoodies</a>
                                <a class="dropdown-item" href="/jeans">Jeans</a>
                           </div>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Kids
                          </a>
                          <div class="dropdown-menu">
                              <a class="dropdown-item" href="/outers">outerwear</a>
                              <a class="dropdown-item" href="/actives">activewear</a>
                              <a class="dropdown-item" href="/allUsers">View-Users</a>
                          
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>
                  <div className="col-md-2">
                  <div class="dropdown" id="drop3">
                    <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                      products
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="/addProducts">add</a>
                      <a class="dropdown-item" href="/updateProduct">update</a>
                      <a class="dropdown-item" href="/deleteProduct">remove</a>
                     
                    </div>
                    
                  </div>
                  
                    </div>

                  <div className="col-md-2">
                  <div class="dropdown">
                    <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                      profile
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="/profile">profile</a>
                  
                      <a class="dropdown-item" onClick={signOut}>signout</a>
                     
                    </div>
                  </div>

                  
                  
                    </div>
                  </div>
                </div>
              </div>
     
</div>
        )
    }else if(props.user.userId !== undefined && props.user.agent === false) {
        return (
          <div className="main-container " >

          <div className="form-container">
        <form id="form" onSubmit = {handleSearchSubmit}>
            <input className="search-input" type="text" name="search" placeholder="search" ></input>
        </form>
          </div>

  
            <div className="header bg-info" >
              <div className="header">
                <div className="row">
                  <div className="col-md-2  text-center">
                    <div className="title">
                    <a class="navbar-brand "  href="/" id="logo" >Claim</a>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                       </button>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                  <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
    
                    
                        <li class="nav-item">
                          <a class="nav-link" href="products">view-all</a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Men
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="/hoodies">Hoodies</a>
                            <a class="dropdown-item" href="/t-shirts">T-shirts</a>
                            <a class="dropdown-item" href="/coats">Coats</a>
                            <a class="dropdown-item" href="/pants">Pants</a>
                          </div>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Woman
                           </a>
                           <div class="dropdown-menu">
                                <a class="dropdown-item" href="/dresses">Dresses</a>
                                <a class="dropdown-item" href="/blazers">Blazers</a>
                                <a class="dropdown-item" href="/">Hoodies</a>
                                <a class="dropdown-item" href="/jeans">Jeans</a>
                           </div>
                        </li>

                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Kids
                          </a>
                          <div class="dropdown-menu">
                              <a class="dropdown-item" href="/outers">outerwear</a>
                              <a class="dropdown-item" href="/actives">activewear</a>
                              <a class="dropdown-item" href="/allUsers">View-Users</a>
                          
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>

                  <div className="col-md-4">
                  <div class="dropdown07">
                    <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                      profile
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="/profile">profile</a>
                      <a class="dropdown-item" href="/userProducts">orders</a>
                      <a class="dropdown-item" onClick={signOut}>signout</a>
                     
                    </div>
                  </div>

                  <div class="dropdown08">
                    <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                      cart
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="/myCart">My-Cart</a>
                     
                     
                    </div>
                  </div>

                  
                  
                    </div>
                  </div>
                </div>
              </div>
     
</div>
        )
    }else {
        return (

        <div className="main-container " >

          <div className="form-container">
        <form id="form" onSubmit = {handleSearchSubmit}>
            <input className="search-input" type="text" name="search" placeholder="search" ></input>
        </form>
          </div>

          {/* top search code close here  */}

          {/* main header code here start======= */}
            <div className="header bg-info" >
              <div className="header">
                <div className="row">
                  <div className="col-md-2  text-center">
                    <div className="title">
                    <a class="navbar-brand "  href="/" id="logo" >Claim</a>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                       </button>
                    </div>
                  </div>

                  <div className="col-md-8">
                  <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav" id="ul3">
                        <li class="nav-item active">
                          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="products">view-all</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Men
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="/hoodies">Hoodies</a>
                            <a class="dropdown-item" href="/t-shirts">T-shirts</a>
                            <a class="dropdown-item" href="/coats">Coats</a>
                            <a class="dropdown-item" href="/pants">Pants</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Woman
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="/dresses">Dresses</a>
                            <a class="dropdown-item" href="/blazers">Blazers</a>
                            <a class="dropdown-item" href="/">Hoodies</a>
                            <a class="dropdown-item" href="/jeans">Jeans</a>
                          </div>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Kids
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="/outers">outerwear</a>
                            <a class="dropdown-item" href="/actives">activewear</a>
                            <a class="dropdown-item" href="/allUsers">View-Users</a>
                          
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>
            

                  <div className="col-md-2">
                  <div class="dropdown">
                    <button class="btn text-white mt-2 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                      User
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="/signin">Signin</a>
                      <a class="dropdown-item" href="/signup">Signup</a>
                     
                    </div>
                  </div>
                
                  
                    </div>
                  </div>
                </div>
              </div>
     
</div>






      
        

      
         
        
    
        )
    }
}
    return ( 
        <div>
            <div>{renderNavbar()}</div>
        </div>
     );
}

export default Navbar;