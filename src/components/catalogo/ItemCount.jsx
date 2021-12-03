import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import swal from '@sweetalert/with-react'

const ItemCount = ({ stock, initial}) => {
    const [count, setCount] = useState(initial)
    
    const Decrease = () => {
        console.log(count)
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    };
    const Increase = () => {
        console.log(count)
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }

    }
    const onAdd = () => {
        if (count === 1) {swal ( "¡Listo!" ,  `Agregaste ${count} producto al carrito :)` ,  "success" )
        }
        else {swal ( "¡Listo!" ,  `Agregaste ${count} productos al carrito :)` ,  "success" )}
        
    };
    return (
        <>
        <Row>
            <Col>
                <Button onClick={Decrease}>
                    -
                </Button>
            </Col>
            <Col>
                <h5>{count}</h5>
            </Col>
            <Col>
                <Button onClick={Increase}>
                    +
                </Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button onClick={onAdd}>
                    Agregar al carrito
                </Button>
            </Col>
        </Row>
        </>
    );
}
export default ItemCount