import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart3 = ( props ) => {
    const navigate = useNavigate();
    const { _id, title, description, img, price } = props.family;
    const showDetails = id => {
        navigate( `/familydetails/${ id }` );
    };
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
                    <Button onClick={() => showDetails( _id )} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart3;