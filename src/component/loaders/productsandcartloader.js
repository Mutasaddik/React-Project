export const productsandcartloader= async ()=>{

const productsData=await fetch('products.josn');
const products=await productsData.json();
}