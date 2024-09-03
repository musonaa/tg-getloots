import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './header.css'; 
import Button from '../button/button';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            {/* <Button onClick={onClose}>Закрыть</Button> */}
            <span className={'username'}>
                <b>{user?.username}</b>, добро пожаловать в GetLootss! <br />
                Желаем приятных покупок❤️
            </span>
        </div>   
    )
}

export default Header;