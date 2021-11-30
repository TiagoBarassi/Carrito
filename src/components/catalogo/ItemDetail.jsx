import { CardText } from 'reactstrap';

const ItemDetail = ({product }) => {
    return(
        <>
        <CardText>
            {product.descripcion}
        </CardText>
        </>
    )
};


export default ItemDetail;