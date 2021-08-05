import './Shop.css';
import Product from '../Product/Product';
//import Products from '../../DataBase/Products.json';
import { useStateValue } from '../StateProvider/StateProvider';
import React, { useEffect, useState } from 'react';
import { TramSharp } from '@material-ui/icons';
function Shop({searchText}) {
   debugger;
   const [{basket}] = useStateValue()
   const [productsItems,setProductsItems]=useState();
   useEffect(()=>{
         fetch("http://localhost:3000/Products/getAllProduct", {
         method: "GET",
         headers: {
         "Content-Type": "application/json",
         "access-control-allow-origin": "*",
         }
         }).then(res=>res.json())
         .then((res)=> setProductsItems(res) )
   },[])
   
   return (
      <div>
      <div className="shop">
        <div className="shop-row">   
        {
            productsItems &&  productsItems.filter(j => j.title.toLowerCase().includes
            (searchText.toLowerCase())).map(i =>{ 
               let itemStatus="Add To Basket";
               let inStock=true;
               basket&&basket.forEach(_item => {
                  if (i.id === _item.id){
                        itemStatus="In Cart" 
                  } 
                  else {
                     if (i.amount===0){
                     itemStatus='Out Of Stock';
                     inStock=false;
                     }
                  }
               }) 
            return ( 
                  <Product
                     itemStatus={itemStatus}
                     instock={inStock}
                     id={i.id}
                     title={i.title}
                     price={i.price}
                     image={i.image}
                     amount={i.amount}
                     description={i.description}
                     productsItems={productsItems}
                  />  
            );
            })
         }    
       {/* { Products && Products.Products.filter(j => j.title.toLowerCase().includes
         (searchText.toLowerCase())).map(i =>{ 
            let itemStatus="Add To Basket";
            let inStock=true;
            basket.forEach(_item => {
               if (i.id === _item.id){
                   itemStatus="In Cart" 
               } 
               else {
                  if (i.amount===0){
                  itemStatus='Out Of Stock';
                  inStock=false;
                  }
             }
            }) 
            return ( 
                  <Product
                     itemStatus={itemStatus}
                     instock={inStock}
                     id={i.id}
                     title={i.title}
                     price={i.price}
                     image={i.image}
                     amount={i.amount}
                     description={i.description}
                  />  
            );
            })
         }  */}
     </div>
      </div> 
      </div>
     ) 
      
   }

export default Shop;