import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Person.css';

const Person = (props) => {
    // console.log(props);
    const { name, photo, age, country, salary, role } = props.person;
    return (
        <div>

            <div className="col">
                <div className="card h-100 text-center">
                    <div>
                        <img src={photo} className="card-img-top rounded-circle w-50 mt-2" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p><small className="fw-normal">{role}</small></p><br />
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">Monthly Salary: ${salary}</p>
                            <button onClick={() => props.addToCart(props.person)} className="btn bg-color text-white px-5"><FontAwesomeIcon icon={faHandshake} />  Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Person;