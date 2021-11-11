import './App.css';
import NavBar from './components/navbar/navbar';
import itemListContainer from './components/catalogo/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <itemListContainer />  
    </div>
  );
}

export default App;
