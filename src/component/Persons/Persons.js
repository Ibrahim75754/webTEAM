import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPerson] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);

    const addToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            persons.map(person => <Person
                                key={person.id}
                                person={person}
                                addToCart={addToCart}
                            ></Person>)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <Cart cart={cart}></Cart>

                </div>
            </div>


        </div >
    );
};

export default Persons;