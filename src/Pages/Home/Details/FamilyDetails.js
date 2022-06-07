import React from 'react';
import { useParams } from 'react-router-dom';

const FamilyDetails = () => {
    const { familyId } = useParams();
    return (
        <div>
            <h2>Family Package Details: {familyId}</h2>
        </div>
    );
};

export default FamilyDetails;