import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import {addToDb} from  '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const products=useLoaderData();

    const[cart,setCart]=useState([]);
    

    useEffect(()=>{

        const storedCart=getShoppingCart();
        const savedData=[];

        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){

                savedData.push(addedProduct)
            }
            setCart(savedData)
        }
    },[products])
    const handleAddToCart=(product)=>{
        const newAdToCart=[...cart,product]
        setCart(newAdToCart)
       addToDb(product.id);

            
    }


    return (
        <div className='shop-container'>
            <div className="product-container">

               {
                products.map(product=><Product 
                
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    

                    ></Product>)


               }

            </div>


            
            <div className="cart-container">

        <Cart
        
        
        cart={cart}
        
        ></Cart>


            </div>
        </div>
    );
};

export default Shop;