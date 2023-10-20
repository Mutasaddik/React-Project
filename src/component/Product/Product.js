import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const {handleAddToCart,product}=props;

    const {id,category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity}=props.product
    
    

  
    return (

       

        <div className='product'>
            <img src= {img}></img> 

            <div className='product-info'>

            <p className='product-name'>{name}</p>
            <p className='price-name'> Price:${price}</p>
            <p className='manufacturer'>Manufacturer :{seller}</p>
            <p className='rating'>Rating:{ratings}</p>
            
            </div>

            <button onClick={()=>handleAddToCart(product)} className='add-to-cart'>
                
                
            <p>Add To Cart</p>

            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
                </button>

            
            
        </div>
    );
};

export default Product;

// "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
//         "category": "Men's Sneaker",
//         "name": "ULTRABOOST 22 SHOES",
//         "seller": "Addidas",
//         "price": 420,
//         "stock": 20,
//         "ratings": 4,
//         "ratingsCount": 3725,
//         "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//         "shipping": 1,
//         "quantity": 0