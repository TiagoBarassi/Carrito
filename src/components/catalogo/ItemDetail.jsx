import { CardText } from 'reactstrap';

const ItemDetail = ({ product }) => {
    return(
        <>
        <CardText className="descripcionProducto">
            {product.descripcion}
        </CardText>
        </>
    )
};


export default ItemDetail;