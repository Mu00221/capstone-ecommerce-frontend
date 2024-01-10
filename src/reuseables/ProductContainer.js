// import '../style/listProducts.css'

function ProductContainer(props) {
    return ( 


        

        <div >

            <div className=' row row-col-5 card'>
            <img class="card-img-top" src={props.product.picOne} alt="product" />
            <div class="card-body" >
            <p class="card-title" >{props.product.type}</p>
            <p class="card-price" >${props.product.price}</p>
            </div>
            </div>
            
        </div>
     );
}

export default ProductContainer;