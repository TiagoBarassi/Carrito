import { Component } from 'react';

const cartWidget = () => {
    return(
        <div>
            <img src='/images/carrito.png' alt="Carrito"className="Carrito" /> <h5>{this.state.cart}</h5>
        </div>
    )
}

export default cartWidget;