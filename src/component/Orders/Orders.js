import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    const product =useLoaderData();
    return (
        <div>
           orders :{product.length}
        </div>
    );
};

export default Orders;