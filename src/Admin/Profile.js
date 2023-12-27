import { Link } from 'react-router-dom';
import '../style/profile.css';

function Profile(props) {
   
   
    return ( 
        
        <body className='body'>
    <div>
       
        <div className="profile">
        <Link  to={`/user/${props.user.userId}`}><a href='updateProfile' >update profile</a></Link>
            <div className='container3'>
                <div className='row'>
                    <div className='col-md-6'>
                    
                        <div className='profile-image'>
                         <div className="img-div">
                             <img id='picture' src={props.user.photo} alt="user-profile" />
                             </div>
                             </div>
                             <div className='profile-text'>
                             <p className='userName'>{props.user.firstName}</p>
                             <p className='lastName'>{props.user.lastName}</p>
                             </div>
                    </div>
                  
                    <div className='col-md-6 '>
                        
                        <div className='form-group'>
                            <div className='title'>
                                <h3>My Profile</h3>
                            </div>
                            
                           <p className='text'><span>firstName:</span> {props.user.firstName}</p>
                           <p className='text'><span>Last Name:</span> {props.user.lastName}</p>
                           <p className='text'><span>Email Address:</span> {props.user.email}</p>
                           <p className='text'><span>DOB:</span> {props.user.dob}</p>
                           <p className='text'><span>Phone Number:</span> {props.user.phone}</p>
                           <p className='text'><span>Address:</span> {props.user.address}</p>
                           <p className='text'><span>Points:</span> {props.user.points}</p>
                
                          
                        </div>
                       

                    </div>
           
                 </div>
            </div>
        </div>
        
    </div> 
    </body>
    
    );
}

export default Profile;