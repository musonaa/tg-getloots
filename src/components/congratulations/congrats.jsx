import React from 'react';
import './congrats.css';

const Congratulations = () => {
    return (
        <div className="congratulations-container">
            
            <h1>Ваш заказ успешно оформлен!</h1>
            <p>Ожидайте пока @lLojin свяжется с вами. Спасибо что воспользовались нашим сервисом!</p>
            <div className="gif-section">
                <img src= "https://tenor.com/ru/view/kawaii-cute-peach-cat-gif-23743858" alt="Thank YOU" className="tu-gif" />
            </div>
        </div>
    );
};

export default Congratulations;
