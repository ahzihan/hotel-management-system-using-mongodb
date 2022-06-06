import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart2 = ( props ) => {
    const { title, description, img, price } = props.double;
    return (
        <div>
            <Card className=''>
                <Card.Img className="w-100" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to='/details'><Button variant="primary">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart2;