import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/catalogo/ItemListContainer';
import { Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Row >
        <ItemListContainer greeting="Productos:"/>
      </Row>
    </div>
  );
}

export default App;
