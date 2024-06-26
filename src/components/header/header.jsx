import React from 'react';
import { useTelegram } from 'src/hooks/useTelegram';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>   
    )
}