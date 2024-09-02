import React from 'react';
import './congrats.css';
import tuGif from '/images/kawaii-cute.gif';

const Congratulations = () => {
    return (
        <div className="congratulations-container">
            
            <h1>Ваш заказ успешно оформлен!</h1>
            <p>Ожидайте пока @lLojin свяжется с вами. Спасибо что воспользовались нашим сервисом!</p>
            {/* <img src="/images/kawaii-cute.gif" alt="Thank You" className="tu-gif" /> */}
            <img src="/images/trahs.png"/>
        </div>
    );
};

export default Congratulations;
