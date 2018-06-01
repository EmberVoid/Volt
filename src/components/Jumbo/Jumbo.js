import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import "./Jumbo.css"


const Jumbo = () => {
    return (
        <Jumbotron>
            <div className="container centered">
                <h1 className="f1">Greivin Silva</h1>
                <p className="f2">
                    Ingeniero Electronico
                </p>
            </div>
        </Jumbotron>
    )
};

export default Jumbo;