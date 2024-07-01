import React, { useEffect, useState } from 'react';

const OrdersComponent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <strong>Email:</strong> {order.email} <br />
                        <strong>Product:</strong> {order.subject} <br />
                        <strong>Password:</strong> {order.password} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrdersComponent;
