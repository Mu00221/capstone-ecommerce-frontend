import '../style/home.css';


function Home(props) {
    console.log("USER ID", props.user.userId);
    return (
            <div>


<div class="parallax2">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/c578ebfdd28795a16461609d02392d64_1600x.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/4ba8f13ec4247189cb5c554417ac24ae_1600x.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/9bec1ba3ea11b93f90d96bbb6db3d9cc_1600x.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
    <div className='pallarex1 p-5'>
        <div >
        
      
  

  </div>
    </div>

    <div className='pallarex3'>
     
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/c578ebfdd28795a16461609d02392d64_1600x.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/4ba8f13ec4247189cb5c554417ac24ae_1600x.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.fantaskycdn.com/9bec1ba3ea11b93f90d96bbb6db3d9cc_1600x.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    



  

            </div>
        
            
        );
}

export default Home;