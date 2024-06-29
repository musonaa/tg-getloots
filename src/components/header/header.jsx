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
                {user?.username}, добро пожаловать в GetLoots! <br />
                Желаем вам приятных покупок❤️
            </span>
        </div>   
    )
}

export default Header;