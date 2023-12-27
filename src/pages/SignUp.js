import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../style/signup.css'

function SignUp(props) {

    const navigator = useNavigate();

    const signUpChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       const tempUser = { ...props.user };
        tempUser[name] = value;
        props.setUser(tempUser);
    };

    const signUpSubmitHandler = () => {
        axios.post("http://localhost:9092/user/sign-up", props.user)
          .then((response) => {
            navigator("/")
          })
          .catch((e) => {
            console.log(e)
          })
        }

    return ( 
      <div className="form-cover">
    
      <div class="login-reg-panel"/>
                    
      <div class="white-panel">
      <div className="signup mt-2 p-2">
      <div className="title">
          <h2>SignUp</h2>
          <hr></hr>
        </div>
      <div class="row ">
       
    <div class="col " id="grid">
      <input type="text" class="form-control" placeholder="First name" name="firstName" onChange={signUpChangeHandler}/>
      <input type="email" class="form-control" placeholder="Email Address" name="email" onChange={signUpChangeHandler}/>
      <input type="date" class="form-control" placeholder="Date of Birth" name="dob" onChange={signUpChangeHandler}/>
      <input type="text" class="form-control" placeholder="Home Address" name="address" onChange={signUpChangeHandler}/>
      <input type="text" class="form-control" placeholder="State" name="state" onChange={signUpChangeHandler}/>

    </div>
    <div class="col" id="grid">
    <input type="text" class="form-control" placeholder="Last name" name="lastName" onChange={signUpChangeHandler}/>
    <input type="password" class="form-control" placeholder="Password" name="password" onChange={signUpChangeHandler}/>
    <input type="text" class="form-control" placeholder="Phone Number" name="phone" onChange={signUpChangeHandler}/>
    <input type="text" class="form-control" placeholder="Profile Photo" name="photo" onChange={signUpChangeHandler}/>
    <input type="password" class="form-control" placeholder="User status is required!" name="code" onChange={signUpChangeHandler}/>

    </div>
      </div>
      <div>
                  <button class="btn btn-info btn-block mt-5" onClick={signUpSubmitHandler}>Submit</button>
                
      </div>
      </div>
  
        </div>
      </div>
     );
}

export default SignUp;