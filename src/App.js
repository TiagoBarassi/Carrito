import './App.css';
import NavBar from './components/navbar/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ItemListContainer from './components/catalogo/ItemListContainer';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Item from './components/catalogo/Item'
import Pastas from './components/Pastas'
import Cepillos from './components/Cepillos'
import EnjuagueBucal from './components/EnjuagueBucal';

//import { useEffect, useState } from 'react';
//import { collection, getDoc, getDocs, getFirestore } from '@firebase/firestore';

function App() {
  //  const [products, setProducts] = useState(null)

  //  useEffect(() => {
  //    const db = getFirestore();
  //    const itemsCollection = collection(db, "items,");
  //    getDocs(itemsCollection).then((snapshot) => {
  //      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
  //    });
  //  }, []);
  //  console.log(products);
  //TRAIGO UN SOLO DOCUMENTO
  // useEffect(() => {
  //    const db = getFirestore();

  // const itemDetail = doc (db, "items", "
  // nfKO2GfBlBNim6mYfzxM");
  // getDoc(itemDetail).then((snapshot) => {
  //   if (snapshot.exists()){
  //   setProduct({ ...snapshot.data(), id: snapshot.id});
  // }
  // })   
  // }, []);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<ItemListContainer greeting="Productos:" classname="listaProductos" />} />
            <Route path="/category/PastasDentales" element={<Pastas />} />
            <Route path="/category/EnjuagueBucal" element={<EnjuagueBucal />}/>
            <Route path="/category/Cepillos" element={<Cepillos />}/>
            <Route path="/productos/producto:id" element={<Item />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
