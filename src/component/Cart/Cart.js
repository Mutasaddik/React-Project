import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props;
    console.log(cart)

    let total=0;
    let shiping=0

    for(const product of cart){

        total=total+product.price;
        shiping=shiping+product.shipping;

    }
    let tax=parseFloat((total*0.1).toFixed(2));

    const grandTotal=shiping+total+tax;
   

    

    

    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shiping}</p>
            <p>Tax:${tax}</p>

            <h3>Grannd Total:${grandTotal}</h3>

            <div className='button'>
            <button>Clear Cart</button>
            <button>Review Cart</button>
            </div>
           
            
        </div>
    );
};

export default Cart;