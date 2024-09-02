import React from 'react';
import './cart.css';
import Button from '../button/button';

const Cart = ({ items, onRemove, onPay, onClose }) => {
    return (
        <div className="cart">
            <h2>Ваша корзина</h2>
            {items.length === 0 ? (
                <div>Корзина пуста</div>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <div className="cart-item">
                                <img src={item.img} alt={item.title} />
                                <div>{item.title}</div>
                                <div>{item.price} руб</div>
                                {/* 🗑️ */}
                                <button onClick={() => onRemove(item.id)} className='trash'><img src="/images/trash.png" alt="trash" /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {/* {items.length > 0 && (
                <Button onClick={onPay} className="pay-btn">Оплатить {items.reduce((acc, item) => acc + item.price, 0)} руб</Button>
            )} */}
            <Button onClick={onClose} className="close-btn">Назад</Button>
        </div>
    );
}

export default Cart;
