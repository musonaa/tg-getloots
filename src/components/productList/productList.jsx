import React, { useState, useEffect, useCallback } from 'react';
import './productList.css';
import ProductItem from "../productItem/productItem";
import { useTelegram } from '../../hooks/useTelegram';
import Cart from '../cart/cart';
import { useNavigate  } from 'react-router-dom';  // for navigation

import PayButton from '../pay-btn/pay-btn';
import Form from '../form/form';

import Congratulations from '../congratulations/congrats';

const products = [

    {id: '1', title: '470 RP', price: 200, img: "/images/rp.png", category: 'lol'},
    {id: '2', title: '1380 RP', price: 480, img: "/images/rp.png", category: 'lol'},
    {id: '3', title: '2600 RP', price: 880, img: "/images/rp.png", category: 'lol'},
    {id: '4', title: '5300 RP', price: 1625, img: "/images/rp.png", category: 'lol'},
    {id: '5', title: '8100 RP', price: 2450, img: "/images/rp.png", category: 'lol'},
    {id: '6', title: '11000 RP', price: 3200, img: "/images/rp.png", category: 'lol'},
    {id: '7', title: '33500 RP', price: 9500, img: "/images/rp.png", category: 'lol'},
    {id: '8', title: '60200 RP', price: 16800, img: "/images/rp.png", category: 'lol'},

    {id: '9', title: 'Луна', price: 330, img: "/images/luna.webp", category: 'genshin'},
    {id: '16', title: 'Жемчужный Гимн', price: 620, img: "/images/perl.webp", category: 'genshin'},
    {id: '17', title: 'Жемчужный Хор', price: 1150, img: "/images/perl.webp", category: 'genshin'},
    {id: '10', title: '60 Кристалов', price: 65, img: "/images/crystals.webp", category: 'genshin'},
    {id: '11', title: '300 Кристалов', price: 290, img: "/images/crystals.webp", category: 'genshin'},
    {id: '12', title: '980 Кристалов', price: 880, img: "/images/crystals.webp", category: 'genshin'},
    {id: '13', title: '1980 Кристалов', price: 1600, img: "/images/crystals.webp", category: 'genshin'},
    {id: '14', title: '3280 Кристалов', price: 2830, img: "/images/crystals.webp", category: 'genshin'},
    {id: '15', title: '6480 Кристалов', price: 5650, img: "/images/crystals.webp", category: 'genshin'},

    {id: '18', title: 'Лунит Подписка', price: 435, img: "/images/lunite-subscription.webp", category: 'wuwa'},
    {id: '19', title: '60 Лунитов', price: 85, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '20', title: '300 Лунитов', price: 430, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '21', title: '980 Лунитов', price: 1300, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '22', title: '1980 Лунитов', price: 2600, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '23', title: '3280 Лунитов', price: 4330, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '24', title: '6480 Лунитов', price: 8420, img: "/images/lunite.webp", category: 'wuwa'},
    {id: '25', title: 'Insider Channel', price: 930, img: "/images/insider-channel.webp", category: 'wuwa'},
    {id: '26', title: 'Connoisseur Channel', price: 1750, img: "/images/connoisseur-channel.webp", category: 'wuwa'},

    {id: '27', title: 'Бравл Пасс', price: 570, img: "/images/brawl-pass.webp", category: 'brawl'},
    {id: '28', title: 'Бравл Пасс Плюс', price: 840, img: "/images/brawl-pass-plus.webp", category: 'brawl'},
    {id: '29', title: '30 Гемов', price: 200, img: "/images/gems.webp", category: 'brawl'},
    {id: '30', title: '80 Гемов', price: 460, img: "/images/gems.webp", category: 'brawl'},
    {id: '31', title: '170 Гемов', price: 830, img: "/images/gems.webp", category: 'brawl'},
    {id: '32', title: '360 Гемов', price: 1600, img: "/images/gems.webp", category: 'brawl'},
    {id: '33', title: '950 Гемов', price: 3800, img: "/images/gems.webp", category: 'brawl'},
    {id: '34', title: '2000 Гемов', price: 7540, img: "/images/gems.webp", category: 'brawl'},

    {id: '35', title: 'Pass Clash Royale Gold', price: 545, img: "/images/pass-royale-gold.png", category: 'royale'},
    {id: '36', title: 'Pass Clash Royale Diamond', price: 1020, img: "/images/pass-royale-diamond.png", category: 'royale'},
    {id: '37', title: '80 Clash Royale Gems', price: 100, img: "/images/royale-gems.png", category: 'royale'},
    {id: '38', title: '500 Clash Royale Gems', price: 430, img: "/images/royale-gems.png", category: 'royale'},
    {id: '39', title: '1200 Clash Royale Gems', price: 835, img: "/images/royale-gems.png", category: 'royale'},
    {id: '40', title: '2500 Clash Royale Gems', price: 1600, img: "/images/royale-gems.png", category: 'royale'},
    {id: '41', title: '6500 Clash Royale Gems', price: 3800, img: "/images/royale-gems.png", category: 'royale'},
    {id: '42', title: '14000 Clash Royale Gems', price: 7540, img: "/images/royale-gems.png", category: 'royale'},

    {id: '43', title: 'Clash of Clans Gold', price: 600, img: "/images/clash-pass.png", category: 'clash'},
    {id: '44', title: '80 Clash of Clans Gems', price: 100, img: "/images/clash-gems.png", category: 'clash'},
    {id: '45', title: '500 Clash of Clans Gems', price: 430, img: "/images/clash-gems.png", category: 'clash'},
    {id: '46', title: '1200 Clash of Clans Gems', price: 835, img: "/images/clash-gems.png", category: 'clash'},
    {id: '47', title: '2500 Clash of Clans Gems', price: 1600, img: "/images/clash-gems.png", category: 'clash'},
    {id: '48', title: '6500 Clash of Clans Gems', price: 3800, img: "/images/clash-gems.png", category: 'clash'},
    {id: '49', title: '14000 Clash of Clans Gems', price: 7540, img: "/images/clash-gems.png", category: 'clash'},

    {id: '50', title: 'Снабжение експресса', price: 435, img: "/images/express.webp", category: 'honkai'},
    {id: '51', title: '60 Нефритов', price: 120, img: "/images/nefrit.png", category: 'honkai'},
    {id: '52', title: '300 Нефритов', price: 570, img: "/images/nefrit.png", category: 'honkai'},
    {id: '53', title: '980 Нефритов', price: 1550, img: "/images/nefrit.png", category: 'honkai'},
    {id: '54', title: '1980 Нефритов', price: 3000, img: "/images/nefrit.png", category: 'honkai'},
    {id: '55', title: '3280 Нефритов', price: 5000, img: "/images/nefrit.png", category: 'honkai'},
    {id: '56', title: '6480 Нефритов', price: 9750, img: "/images/nefrit.png", category: 'honkai'},
    {id: '57', title: 'Слава Безымянных', price: 1020, img: "/images/slava-nameless.png", category: 'honkai'},
    {id: '58', title: 'Честь Безымянных', price: 2020, img: "/images/chest-nameless.webp", category: 'honkai'},

    {id: '59', title: 'Смена Региона', price: 200, img: "/images/steam-logo.png", category: 'steam'},

    {id: '60', title: 'Discord Nitro Classic Month', price: 165, img: "/images/nitro-classic.webp", category: 'discord'},
    {id: '61', title: 'Discord Nitro Classic Year', price: 1350, img: "/images/nitro-classic.webp", category: 'discord'},
    {id: '62', title: 'Discord Nitro Full Month', price: 345, img: "/images/nitro-full.webp", category: 'discord'},
    {id: '63', title: 'Discord Nitro Full Year', price: 3300, img: "/images/nitro-full.webp", category: 'discord'},

    {id: '64', title: 'Discord Коллекция Palword', price: 310, img: "/images/palword.png", category: 'nitro-accessories'},
    {id: '65', title: 'Discord Коллекция Galaxy', price: 205, img: "/images/galaxy.png", category: 'nitro-accessories'},
    {id: '66', title: 'Discord Коллекция Anime', price: 230, img: "/images/anime.png", category: 'nitro-accessories'},
    {id: '67', title: 'Discord Коллекция Lofy Vibes', price: 205, img: "/images/lofi.png", category: 'nitro-accessories'},
    {id: '68', title: 'Discord Коллекция Fantasy', price: 260, img: "/images/fantasy.png", category: 'nitro-accessories'},
    {id: '69', title: 'Discord Коллекция Cyberpunk', price: 205, img: "/images/cyberpunk.png", category: 'nitro-accessories'},
    {id: '70', title: 'Discord Коллекция Elements', price: 205, img: "/images/elements.png", category: 'nitro-accessories'},
    {id: '71', title: 'Discord Коллекция Pirates', price: 205, img: "/images/pirates.png", category: 'nitro-accessories'},
    {id: '72', title: 'Discord Коллекция Arcade', price: 205, img: "/images/arcade.png", category: 'nitro-accessories'},
    {id: '73', title: 'Discord Коллекция SpringToons', price: 205, img: "/images/springtoons.png", category: 'nitro-accessories'},
    {id: '74', title: "Discord Коллекция Feelin' Retro ", price: 205, img: "/images/retro.png", category: 'nitro-accessories'},
    {id: '75', title: "Discord Еффект Волшебные сердца ", price: 310, img: "/images/magic-hearts.png", category: 'nitro-accessories'},
    {id: '76', title: "Discord Еффект Осколок ", price: 310, img: "/images/oskolok.png", category: 'nitro-accessories'},
    {id: '77', title: "Discord Еффект Сюрикен ", price: 310, img: "/images/suriken.png", category: 'nitro-accessories'},
    {id: '78', title: "Discord Еффект Пиковая мощность ", price: 310, img: "/images/pickovaya.png", category: 'nitro-accessories'},
    {id: '79', title: "Discord Еффект Безмятежная сакура ", price: 310, img: "/images/sakura.png", category: 'nitro-accessories'},
    {id: '80', title: "Discord Еффект Водяной заряд ", price: 310, img: "/images/water.png", category: 'nitro-accessories'},
    {id: '81', title: "Discord Еффект Таинственные лозы ", price: 310, img: "/images/lozy.png", category: 'nitro-accessories'},
    {id: '82', title: "Discord Еффект Пыльца пикси ", price: 310, img: "/images/piksi.png", category: 'nitro-accessories'},
    
    {id: '83', title: 'Discord Коллекция Palword', price: 350, img: "/images/palword.png", category: 'accessories'},
    {id: '84', title: 'Discord Коллекция Galaxy', price: 235, img: "/images/galaxy.png", category: 'accessories'},
    {id: '85', title: 'Discord Коллекция Anime', price: 295, img: "/images/anime.png", category: 'accessories'},
    {id: '86', title: 'Discord Коллекция Lofy Vibes', price: 235, img: "/images/lofi.png", category: 'accessories'},
    {id: '87', title: 'Discord Коллекция Fantasy', price: 350, img: "/images/fantasy.png", category: 'accessories'},
    {id: '88', title: 'Discord Коллекция Cyberpunk', price: 235, img: "/images/cyberpunk.png", category: 'accessories'},
    {id: '89', title: 'Discord Коллекция Elements', price: 235, img: "/images/elements.png", category: 'accessories'},
    {id: '90', title: 'Discord Коллекция Pirates', price: 235, img: "/images/pirates.png", category: 'accessories'},
    {id: '91', title: 'Discord Коллекция Arcade', price: 235, img: "/images/arcade.png", category: 'accessories'},
    {id: '92', title: 'Discord Коллекция SpringToons', price: 235, img: "/images/springtoons.png", category: 'accessories'},
    {id: '93', title: "Discord Коллекция Feelin' Retro ", price: 235, img: "/images/retro.png", category: 'accessories'},
    {id: '94', title: "Discord Еффект Волшебные сердца ", price: 400, img: "/images/magic-hearts.png", category: 'accessories'},
    {id: '95', title: "Discord Еффект Осколок ", price: 400, img: "/images/oskolok.png", category: 'accessories'},
    {id: '96', title: "Discord Еффект Сюрикен ", price: 400, img: "/images/suriken.png", category: 'accessories'},
    {id: '97', title: "Discord Еффект Пиковая мощность ", price: 400, img: "/images/pickovaya.png", category: 'accessories'},
    {id: '98', title: "Discord Еффект Безмятежная сакура ", price: 400, img: "/images/sakura.png", category: 'accessories'},
    {id: '99', title: "Discord Еффект Водяной заряд ", price: 400, img: "/images/water.png", category: 'accessories'},
    {id: '100', title: "Discord Еффект Таинственные лозы ", price: 400, img: "/images/lozy.png", category: 'accessories'},
    {id: '101', title: "Discord Еффект Пыльца пикси ", price: 400, img: "/images/piksi.png", category: 'accessories'},

];

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
}


const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isCartVisible, setCartVisible] = useState(false);
    //const [isFormVisible, setFormVisible] = useState(false); // State to show/hide the form
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const navigate = useNavigate();
    const { tg, queryId } = useTelegram();
    const username = tg.initDataUnsafe?.user?.username || "Unknown user";

    const onSendData = useCallback(() => {
        const data = {
            username,
            product: "hi",
            totalPrice: getTotalPrice(addedItems),
            queryId,
        };
    //         fetch("http://127.0.0.1:3001/web-data", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
            
    //     });
    // }, [addedItems, queryId]);
                //local
                // fetch("http://127.0.0.1:3001/save-cart", {

                fetch("https://46.101.117.21:80/save-cart", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                })
    .then(response => response.json())
    .then(data => {
        console.log('Cart data saved:', data);
        navigate('/congratulations');  // redirect to the Congratulations page
        tg.MainButton.hide(); //ubiraem
    })
    .catch(error => {
        console.error('Error saving cart data:', error);
    });
}, [addedItems, queryId, navigate, username]);

    useEffect(() => {
        const handlePayClick = () => {
            // setFormVisible(true); // Show form when pay button is clicked
            onSendData();
        };

        tg.onEvent('mainButtonClicked', handlePayClick);
        return () => {
            tg.offEvent('mainButtonClicked', handlePayClick);
        };
    }, [tg, onSendData]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Приобрести за ${getTotalPrice(newItems)}₽`,
            });
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
        // setFormVisible(false); // Ensure form is hidden when toggling cart
    };

    const handleRemove = (id) => {
        const newItems = addedItems.filter(item => item.id !== id);
        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setParams({
                text: `Приобрести за <b>${getTotalPrice(newItems)}</b>₽`,
            });
        }
    };

    const handleCloseCart = () => {
        setCartVisible(false);
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    return (
        <div>
            {isCartVisible ? (
                <Cart
                    items={addedItems}
                    onRemove={handleRemove}
                    onPay={onSendData}
                    onClose={handleCloseCart}
                />
            // ) : isFormVisible ? (
            //     <div className="form-container">
            //         <Form />
            //         <button onClick={handleCloseForm} className="close-form-btn">Закрыть форму</button>
            //     </div>
            ) : (
                <div className="container">
                    <div className='toph'>
                        <div className="filter">
                            <label htmlFor="category">Фильтр: </label>
                            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="All">All</option>
                                <option value="lol">League of Legends</option>
                                <option value="genshin">Genshin Impact</option>
                                <option value="wuwa">Wuthering Waves</option>
                                <option value="brawl">Brawl Stars</option>
                                <option value="royale">Clash Royale</option>
                                <option value="clash">Clash of Clans</option>
                                <option value="honkai">Honkai Star Rail</option>
                                <option value="nitro-accessories">Discord Accessories (с Nitro)</option>
                                <option value="accessories">Discord Accessories (без Nitro)</option>
                                <option value="steam">Steam Games</option>
                            </select>
                        </div>
                        <div className="cart-btn-container">
                            <button onClick={toggleCart} className="cart-btn">
                                Показать корзину
                            </button>
                        </div>
                    </div>
                    
                    <div className="product-list">
                        {filteredProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                onAdd={onAdd}
                            />
                        ))}
                    </div>
                </div>
            )}
            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    );
};

export default ProductList;