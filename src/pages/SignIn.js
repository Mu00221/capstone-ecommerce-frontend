import axios from "axios";
import { useNavigate } from "react-router-dom"
import React from "react";
import '../style/signin.css'

function SignIn(props) {


    const navigator = useNavigate();

    const signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...props.user };
        tempUser[name] = value;
        props.setUser(tempUser);
    };

    
    const signInSubmitHandler = () => {
        axios.post("http://localhost:9092/user/sign-in", props.user)
          .then((response) => {
            localStorage.setItem("users", response.data.userId)
            props.setUser(response.data)
            navigator("/")
          })
          

         .catch((e) => {
            console.log(e)
          })
    
        }

    return ( 
      <div className="form-cover">
    
    <div class="login-reg-panel"/>
          <div className="white-panel">
              <div className="login mt-4 p-5">
                <div className="row">
                  <div className="title">
                    <h2>SignIn</h2>
                    <hr></hr>
                  </div>
                <div className="col-md-12 mt-5">
                  <div class="form-group">
                   
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" 
                    onChange={signInChangeHandler} aria-describedby="emailHelp" required placeholder="Enter Your Email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1"
                     onChange={signInChangeHandler} required placeholder="Enter your Password"/>
                    <small id="emailHelp" class="form-text text-muted"></small>
                 
                  </div>
                  <button class="btn btn-info btn-block mt-5" onClick={signInSubmitHandler}>Submit</button>
                </div>
                </div>
              </div>
              </div>				
  </div>
    );
}

export default SignIn;