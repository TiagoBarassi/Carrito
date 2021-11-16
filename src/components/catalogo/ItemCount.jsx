import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

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
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
    };
    return (
        <>
        <div>
            <Row className="justify-content-center">
                <Col md={2}>
                    <Button onClick={Decrease}>
                        -
                    </Button>
                </Col>
                <Col md={2}>
                <div>
                <h5>{count}</h5>
                </div>
                </Col>
                <Col md={2}>
                    <Button onClick={Increase}>
                        +
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
            <Col md={4}>
                    <Button onClick={onAdd}>
                        Agregar al carrito
                    </Button>
            </Col>
            </Row>
        </div>
        </>
    );
}
export default ItemCount