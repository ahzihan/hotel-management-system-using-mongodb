import React from 'react';
import { useParams } from 'react-router-dom';

const DoubleDetails = () => {
    const { doubleId } = useParams();
    return (
        <div>
            <h2>Double Package Details: {doubleId}</h2>
        </div>
    );
};

export default DoubleDetails;