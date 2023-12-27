import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function RemoveUser() {

    const {userId} = useParams();

    const navigator = useNavigate();

   
    const deleteUserHandler = () => {
        axios.delete(`http://localhost:9092/user/delete/${userId}`)
        .then((response) => {
            navigator('/')
        })
    }
    return ( <div>
        {deleteUserHandler()}
            </div> );
}

export default RemoveUser;