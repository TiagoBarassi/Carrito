import { Card } from 'reactstrap';
import { CardText } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { Col } from 'reactstrap';
import ItemCount from './ItemCount';


const Item = ({product }) => {
    return (
    <>
    <Col>
        <Card>
            <CardImg
            alt="Imagen del Producto"
            src={product.imagen}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                {product.producto}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {product.precio}
            </CardSubtitle>
            <CardText>
                {product.descripcion}
            </CardText>
            <ItemCount stock={15} initial={1} />
            </CardBody>
        </Card>
    </Col>
    </>
    )
}

export default Item;