import axios from "axios";
import { useEffect, useState } from "react";
import '../style/allUsers.css'
function ViewUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9092/user/all")
        .then((response) => {
            setUsers(response.data);
        })  
        .catch((e) => {
            console.log(e);
        });
    }, []);

    const renderUsers = () => {
        return users.map((user) => {
    
            return (
                
                <div key={user.userId} class="container2">

       <div class="row text-center">

        
        <div class="col-xl-12 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={user.photo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">{user.firstName} {user.lastName}</h5><span class="small  text-muted">{user.email}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        </div>
        
            
                </div>
            )
        })
    }
    
    return ( <div>{renderUsers()}</div> );
}

export default ViewUsers;