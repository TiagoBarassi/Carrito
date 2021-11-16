import { Card } from 'reactstrap';
import { CardGroup } from 'reactstrap';
import { CardText } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { Row } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <CardGroup>
                <div>
                    <h1 className="tituloProductos">{props.greeting}</h1>
                </div>
                <Row>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <ItemCount stock={15} initial={1}/>
                    </CardBody>
                </Card>
                </Row>
            </CardGroup>
        </>    
    );
}

export default ItemListContainer;