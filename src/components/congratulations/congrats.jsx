import React from 'react';
import './congrats.css';

const Congratulations = () => {
    return (
        <div className="congratulations-container">
            
            <h1>Ваш заказ успешно оформлен!</h1>
            <p>Ожидайте пока @lLojin свяжется с вами. Спасибо что воспользовались нашим сервисом!</p>
            {/* <div className="gif-section">
                <img src="https://media.tenor.com/WZvgDcNnWQQAAAAC/kawaii-cute.gif" alt="Thank YOU" className="tu-gif" />
                
            </div> */}
            <div class="tenor-gif-embed" data-postid="23743858" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/kawaii-cute-peach-cat-gif-23743858">Kawaii Cute GIF</a>from <a href="https://tenor.com/search/kawaii-gifs">Kawaii GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
    );
};

export default Congratulations;
