import React from 'react';
import { useParams } from 'react-router-dom';

const SingleDetails = () => {
    const { singleId } = useParams();
    return (
        <div>
            <h2>Single Package Details: {singleId}</h2>
        </div>
    );
};

export default SingleDetails;