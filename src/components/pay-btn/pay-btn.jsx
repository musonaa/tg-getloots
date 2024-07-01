import React, { useState } from 'react';
import Form from '../form/form';

const PayButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handlePayClick = () => {
        setShowForm(true);
    }

    return (
        <div>
            <button className="pay-btn" onClick={handlePayClick}>Pay</button>
            {showForm && <Form />}
        </div>
    );
}

export default PayButton;
