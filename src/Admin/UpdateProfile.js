import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../style/cardDetails.css'

function UpdateProfile() {

    const {userId} = useParams();
    const [updateUser, setUpdateUser] = useState({
    
     firstName: '',
     lastName: '',
     email: '',
     password: '',
     phone: undefined,
     profile: '',
 
   });
 
    const navigator = useNavigate();
 
    const onChangeHandler = (event) => {
     const name = event.target.name;
     const value = event.target.value;
    const tempUser = { ...updateUser };
     tempUser[name] = value;
     setUpdateUser(tempUser);
                              };
 
     
 
    useEffect(() => {
        axios.get(`http://localhost:9092/user/userById/${userId}`)
        .then((response) => {
            setUpdateUser(response.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [userId]);
 
    const updateUserSumbitHandler = () => {
        axios.put(`http://localhost:9092/user/update/${userId}`, updateUser)
        .then((response) => {
            navigator("/")
        })
        .catch((e) => {
            console.log(e);
        })
    }
     return ( 
         <div className="cover">
                   
     <div class="white-panel">
     <div className="update mt-2 p-2">
     <div className="title">
         <h2>Edite User</h2>
         <hr></hr>
       </div>
     <div class="row ">
      
   <div class="col " id="grid">
     <input type="text" class="form-control" placeholder="First name"  name="firstName" value={updateUser.firstName} onChange={onChangeHandler}/>
     <input type="email" class="form-control" placeholder="Email Address" name="email" onChange={onChangeHandler} value={updateUser.email}/>
     <input type="date" class="form-control" placeholder="Date of Birth" name="dob" onChange={onChangeHandler} value={updateUser.dob}/>
     <input type="text" class="form-control" placeholder="Home Address" name="address" onChange={onChangeHandler} value={updateUser.address}/>
   </div>
   <div class="col" id="grid">
   <input type="text" class="form-control" placeholder="Last name" name="lastName" onChange={onChangeHandler} value={updateUser.lastName}/>
   <input type="password" class="form-control" placeholder="Password" name="password" onChange={onChangeHandler} value={updateUser.password}/>
   <input type="text" class="form-control" placeholder="Phone Number" name="phone" onChange={onChangeHandler} value={updateUser.phone}/>
     <input type="text" class="form-control" placeholder="Profile Photo" name="profile" onChange={onChangeHandler} value={updateUser.Profile}/>
   </div>
     </div>
     <div>
                 <button class="btn btn-info btn-block mt-5" onClick={updateUserSumbitHandler}>Submit</button>
               
     </div>
     </div>
 
       </div>
     </div>);
 }


export default UpdateProfile;