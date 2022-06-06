import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cart = ( props ) => {
    const { title, description, img, price } = props.single;
    return (
        <div>
            <Card className='fw-light'>
                <Card.Img className="w-100" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;