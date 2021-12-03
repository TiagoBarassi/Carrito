import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { Col } from 'reactstrap';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({product }) => {
    return (
    <>
    <Col>
        <Card className="listaProductos">
            <CardImg
            alt="Imagen del Producto"
            src={product.imagen}
            className="fotoProducto"
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
            <ItemDetailContainer />
            </CardBody>
        </Card>
    </Col>
    </>
    )
}

export default Item;