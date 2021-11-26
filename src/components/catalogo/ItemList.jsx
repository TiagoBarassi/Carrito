import Item from './Item'
import { useState, useEffect } from 'react'
import Products from '../../JSON/DataList.json'
import { Row } from 'reactstrap'

const ItemList = () => {
    
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
    
    return (
    <>
        <Row >
        {productos.length
        ? productos.map((producto) => (
            <Item product={producto} key={producto.id} />
          ))
        : "Cargando..."}
        </Row>
    </>
    )
}

export default ItemList;