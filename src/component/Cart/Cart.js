import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let total = 0;

    for (const person of cart) {
        total = total + person.salary;
    }

    return (
        <div>
            <div className=" rounded-3 p-3 card-color text-white">
                <h4>Hired Person: {props.cart.length} </h4>
                <h4>Total Cost: ${total}</h4>
                <br />
                <h5>Selected Person List:</h5>

                {
                    cart.map(person => <ul key={person.id}>{person.name}</ul>)
                }
            </div>
        </div>
    );
};

export default Cart;