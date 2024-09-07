// import React, { useEffect, useState } from 'react';

// const OrdersComponent = () => {
//     const [orders, setOrders] = useState([]);

//     // useEffect(() => {
//     //     const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     //     setOrders(storedOrders);
//     // }, []);
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/orders');
//                 const data = await response.json();
//                 setOrders(data);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             }
//         };

//         fetchOrders();
//     }, []);

//     return (
//         <div>
//             <h2>Orders</h2>
//             <ul>
//                 {orders.map((order, index) => (
//                     <li key={index}>
//                         <strong>Email:</strong> {order.email} <br />
//                         <strong>Product:</strong> {order.subject} <br />
//                         <strong>Password:</strong> {order.password} <br />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default OrdersComponent;







import React, { useEffect, useState } from 'react';

const OrdersComponent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // const response = await fetch('http://127.0.0.1:3001/orders');
                //25742
                const response = await fetch('https://46.101.117.21:80/orders');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
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
