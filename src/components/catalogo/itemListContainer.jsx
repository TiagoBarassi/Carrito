import { CardGroup } from 'reactstrap';
import { Row } from 'reactstrap'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return (
        <>
        <Row className="justify-content-center">
            <div>
                <h1 className="tituloProductos">{props.greeting}</h1>
            </div>
            <CardGroup>
                <ItemList />
            </CardGroup>
        </Row>
        </>    
    );
}

export default ItemListContainer;