import { useState, useEffect } from 'react'
import Products from '../../JSON/DataList.json'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({product }) => {
   
    const [productos, setProductos] = useState([]);
    const getData = (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("ERROR: No se encontraron productos.");
          }
        }, 3000);
      });
  
    useEffect(() => {
      getData(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
    }, []);
  

    return(
        <>
        <ItemDetail product={product} key={product.id}/>
        </>
    )
};

  export default ItemDetailContainer
    