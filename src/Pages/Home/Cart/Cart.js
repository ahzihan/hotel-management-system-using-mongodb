import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ( props ) => {
    const navigate = useNavigate();
    const { id, title, description, img, price } = props.single;
    const showDetails = id => {
        navigate( `/singledetails/${ id }` );
    };
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
                    <Button onClick={() => showDetails( id )} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;