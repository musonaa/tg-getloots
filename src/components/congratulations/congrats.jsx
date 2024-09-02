import React from 'react';
import './congrats.css';
// import tuGif from '/images/kawaii-cute.gif';

const Congratulations = () => {
    return (
        <div className="congratulations-container">
            
            <h1>Ваш заказ успешно оформлен!</h1>
            <p>Ожидайте пока @lLojin свяжется с вами. Спасибо что воспользовались нашим сервисом!</p>
            {/* <img src="/images/kawaii-cute.gif" alt="Thank You" className="tu-gif" /> */}
            <img className="tu-gif" src="/images/trahs.png"/>
            {/* <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/LHZyixOnHwDDy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/computer-working-cat-LHZyixOnHwDDy">via GIPHY</a></p> */}
        </div>
    );
};

export default Congratulations;
