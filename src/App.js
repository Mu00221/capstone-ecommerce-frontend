
import { Route ,Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios'
import ProductList from './pages/ProductList';
import Home from './reuseables/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PageWrapper from "./reuseables/PageWrapper";
import ProductDetails from './pages/ProductDetails';
import ProductSearch from './pages/ProductSearch';
import MyTransaction from './pages/MyTransaction';
import MyCart from './pages/MyCart';
import AddProducts from './Agent/AddProducts';
import UpdateProducts from './Agent/UpdateProducts';
import UpdateBox from './Agent/UpdateBox';
import DeleteBox from './Agent/DeleteBoX';
import DeleteProduct from './Agent/DeleteProduct';
import Profile from './Admin/Profile';
import Hoodie from './filters/Hoodie';
import TShirt from './filters/TShirt';
import Pant from './filters/Pant';
import Jean from './filters/Jean';
import Coat from './filters/Coat';
import Dresses from './filters/Dresses';
import Blazer from './filters/Blazer';
import ActiveWear from './filters/ActiverWear';
import OuterWear from './filters/OuterWear';
import EditeBox from './Admin/EditeBox';
import UpdateUser from './Admin/UpdateUser';
import RemoveUser from './Admin/RemoveUser';
import RemoveBox from './Admin/RemoveBox';
import ViewUsers from './Admin/ViewUsers';
// import AllTransaction from './pages/AllTransaction';
import AllTransaction from './pages/AllTransaction';
import UpdateProfile from './Admin/UpdateProfile';


function App() {

  const [user, setUser] = useState({
    userId: undefined,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    photo: ''
  })

  useEffect(() => {
  
    const userId = localStorage.getItem("users");
  
    if(userId) {
      axios.get(`http://localhost:9092/user/userById/${userId}` )
      .then((response) =>{
        setUser(response.data)
        console.log("response", response.data) 
      }).catch((e) => {
        console.log(e);
      })
    }
  } , [])

  return (
    <PageWrapper user = {user} setUser = {setUser}>
    <Routes>
       <Route path="/" element = {<Home user = {user} setUser = {setUser}/>}/> 
       <Route path="/signup" element = {<SignUp user = {user} setUser = {setUser}/>}/> 
       <Route path="/signin" element = {<SignIn user={user} setUser={setUser}/>}/>
       <Route path="/products" element = {<ProductList user={user} setUser={setUser} />}/>
       <Route path='products/type/:type' element = {<ProductSearch user={user} setUser={setUser} />} /> 
       <Route path='/product/:productId' element={<ProductDetails user = {user} setUser = {setUser} />} />
       <Route path='/myCart' element = {<MyCart user = {user} setUser = {setUser} /> } />
       {/* need style */}
       <Route path='/userProducts' element = {<MyTransaction  user = {user} setUser = {setUser}/>} />
       <Route path='/soldProducts' element = {<AllTransaction  user = {user} setUser = {setUser}/>} />


          {/* CRUD User */}
          <Route path='/user/:userId' element={<UpdateProfile user = {user} setUser = {setUser} />} />
        <Route path='/updateUsers' element = {<EditeBox  user = {user} setUser = {setUser}/>} />
        <Route path='updateUser/byId/:userId' element={<UpdateUser user = {user} setUser = {setUser} />} />
        <Route path='/deleteUsers/Id/:userId' element = {<RemoveUser user = {user} setUser = {setUser}/> } />
        <Route path='/deleteUser' element = {<RemoveBox user = {user} setUser = {setUser}/> } />
        <Route path='/allUsers' element = {<ViewUsers user = {user} setUser = {setUser}/> } />
        


        {/* CRUD products */}
       <Route path='/addProducts' element = {<AddProducts user = {user} setUser = {setUser} /> } />
       <Route path='/updateProducts/byId/:productId' element = {<UpdateProducts user = {user} setUser = {setUser}/> } />
       <Route path='/updateProduct' element = {<UpdateBox user = {user} setUser = {setUser}/>} />
       <Route path='/deleteProducts/Id/:productId' element = {<DeleteProduct user = {user} setUser = {setUser}/> } />
       <Route path='/deleteProduct' element = {<DeleteBox user = {user} setUser = {setUser}/> } />

       
        {/* Filters */}
       <Route path='/hoodies' element = {<Hoodie user = {user} setUser = {setUser}/> } />
       <Route path='/t-shirts' element = {<TShirt user = {user} setUser = {setUser}/> } />
       <Route path='/pants' element = {<Pant user = {user} setUser = {setUser}/> } />
       <Route path='/jeans' element = {<Jean user = {user} setUser = {setUser}/> } />
       <Route path='/coats' element = {<Coat user = {user} setUser = {setUser}/> } />
       <Route path='/dresses' element = {<Dresses user = {user} setUser = {setUser}/> } />
       <Route path='/blazers' element = {<Blazer user = {user} setUser = {setUser}/> } />
       <Route path='/actives' element = {<ActiveWear user = {user} setUser = {setUser}/> } />
       <Route path='/outers' element = {<OuterWear user = {user} setUser = {setUser}/> } />




       <Route path='/profile' element = {<Profile user = {user} setUser = {setUser}/> } />
       </Routes>
       </PageWrapper>
    );
}

export default App;