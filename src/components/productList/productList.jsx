import React, { useState, useEffect, useCallback } from 'react';
import './productList.css';
import ProductItem from "../productItem/productItem";
import { useTelegram } from '../../hooks/useTelegram';

const products = [

    {id: '1', title: '470 RP', price: 200, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '2', title: '1380 RP', price: 480, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '3', title: '2600 RP', price: 880, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '4', title: '5300 RP', price: 1625, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '5', title: '8100 RP', price: 2450, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '6', title: '11000 RP', price: 3200, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '7', title: '33500 RP', price: 9500, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},
    {id: '8', title: '60200 RP', price: 16800, description: "Товар на скидке", img: "/images/rp.png", category: 'lol'},

    {id: '9', title: 'Луна', price: 330, description: "Товар на скидке", img: "/images/luna.webp", category: 'genshin'},
    {id: '16', title: 'Жемчужный Гимн', price: 620, description: "Товар на скидке", img: "/images/perl.webp", category: 'genshin'},
    {id: '17', title: 'Жемчужный Хор', price: 1150, description: "Товар на скидке", img: "/images/perl.webp", category: 'genshin'},
    {id: '10', title: '60 Кристалов', price: 65, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},
    {id: '11', title: '300 Кристалов', price: 290, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},
    {id: '12', title: '980 Кристалов', price: 880, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},
    {id: '13', title: '1980 Кристалов', price: 1600, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},
    {id: '14', title: '3280 Кристалов', price: 2830, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},
    {id: '15', title: '6480 Кристалов', price: 5650, description: "Товар на скидке", img: "/images/crystals.webp", category: 'genshin'},

    {id: '18', title: 'Лунит Подписка', price: 435, description: "Товар на скидке", img: "/images/lunite-subscription.webp", category: 'wuwa'},
    {id: '19', title: '60 Лунитов', price: 85, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '20', title: '300 Лунитов', price: 430, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '21', title: '980 Лунитов', price: 1300, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '22', title: '1980 Лунитов', price: 2600, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '23', title: '3280 Лунитов', price: 4330, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '24', title: '6480 Лунитов', price: 8420, description: "Товар на скидке", img: "/images/lunite.webp", category: 'wuwa'},
    {id: '25', title: 'Insider Channel', price: 930, description: "Товар на скидке", img: "/images/insider-channel.webp", category: 'wuwa'},
    {id: '26', title: 'Connoisseur Channel', price: 1750, description: "Товар на скидке", img: "/images/connoisseur-channel.webp", category: 'wuwa'},

    {id: '27', title: 'Бравл Пасс', price: 570, description: "Товар на скидке", img: "/images/brawl-pass.webp", category: 'brawl'},
    {id: '28', title: 'Бравл Пасс Плюс', price: 840, description: "Товар на скидке", img: "/images/brawl-pass-plus.webp", category: 'brawl'},
    {id: '29', title: '30 Гемов', price: 200, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},
    {id: '30', title: '80 Гемов', price: 460, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},
    {id: '31', title: '170 Гемов', price: 830, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},
    {id: '32', title: '360 Гемов', price: 1600, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},
    {id: '33', title: '950 Гемов', price: 3800, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},
    {id: '34', title: '2000 Гемов', price: 7540, description: "Товар на скидке", img: "/images/gems.webp", category: 'brawl'},

    {id: '35', title: 'Pass Royale Gold', price: 545, description: "Товар на скидке", img: "/images/pass-royale-gold.png", category: 'royale'},
    {id: '36', title: 'Pass Royale Diamond', price: 1020, description: "Товар на скидке", img: "/images/pass-royale-diamond.png", category: 'royale'},
    {id: '37', title: '80 Royale Gems', price: 100, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},
    {id: '38', title: '500 Royale Gems', price: 430, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},
    {id: '39', title: '1200 Royale Gems', price: 835, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},
    {id: '40', title: '2500 Royale Gems', price: 1600, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},
    {id: '41', title: '6500 Royale Gems', price: 3800, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},
    {id: '42', title: '14000 Royale Gems', price: 7540, description: "Товар на скидке", img: "/images/royale-gems.webp", category: 'royale'},

    {id: '43', title: 'Clash Royale Gold', price: 600, description: "Со скидкой - 300", img: "/images/clash-pass.webp", category: 'clash'},
    {id: '44', title: '80 Clash Gems', price: 100, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},
    {id: '45', title: '500 Clash Gems', price: 430, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},
    {id: '46', title: '1200 Clash Gems', price: 835, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},
    {id: '47', title: '2500 Clash Gems', price: 1600, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},
    {id: '48', title: '6500 Clash Gems', price: 3800, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},
    {id: '49', title: '14000 Clash Gems', price: 7540, description: "Товар на скидке", img: "/images/clash-gems.png", category: 'clash'},

    {id: '50', title: 'Снабжение експресса', price: 435, description: "Товар на скидке", img: "/images/express.webp", category: 'honkai'},
    {id: '51', title: '60 Нефритов', price: 120, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '52', title: '300 Нефритов', price: 570, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '53', title: '980 Нефритов', price: 1550, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '54', title: '1980 Нефритов', price: 3000, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '55', title: '3280 Нефритов', price: 5000, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '56', title: '6480 Нефритов', price: 9750, description: "Товар на скидке", img: "/images/nefrit.webp", category: 'honkai'},
    {id: '57', title: 'Слава Безымянных', price: 1020, description: "Товар на скидке", img: "/images/slava-nameless.webp", category: 'honkai'},
    {id: '58', title: 'Честь Безымянных', price: 2020, description: "Товар на скидке", img: "/images/chest-nameless.webp", category: 'honkai'},

    {id: '59', title: 'Смена Региона', price: 200, description: "Смена региона на Украину", img: "/images/steam-logo.png", category: 'steam'},

    {id: '60', title: 'Discord Nitro Classic Month', price: 165, img: "/images/nitro-classic.png", category: 'discord'},
    {id: '61', title: 'Discord Nitro Classic Year', price: 1350, img: "/images/nitro-classic.png", category: 'discord'},
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


];

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { tg, queryId } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            product: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        };
        fetch("http://localhost:8000/web-data", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }, [addedItems, queryId]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData, tg]);

    const onAdd = (product, hasNitro) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            const adjustedPrice = hasNitro && product.category === 'nitro-accessories' ? product.nitroPrice : product.price;
            newItems = [...addedItems, { ...product, price: adjustedPrice }];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
            });
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handlePriceChange = (product, hasNitro) => {
        const updatedProducts = addedItems.map(item => {
            if (item.id === product.id && item.category === 'nitro-accessories') {
                return { ...item, price: hasNitro ? product.nitroPrice : product.price };
            }
            return item;
        });
        setAddedItems(updatedProducts);
    };

    return (
        <div>
            <div className="filter">
                <label htmlFor="category">Select Category: </label>
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
            <div className={'list'}>
                {filteredProducts.map(item => (
                    <div key={item.id}>
                        <ProductItem
                            product={item}
                            onAdd={(hasNitro) => onAdd(item, hasNitro)}
                            className={'item'}
                        />
                        {/* {item.category === 'nitro-accessories' && (
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={(e) => handlePriceChange(item, e.target.checked)}
                                />
                                У меня есть Discord Nitro
                            </label>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;