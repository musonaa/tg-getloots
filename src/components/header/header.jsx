// import React from 'react';
// // import './components/header/header.css'; 
// // import { useTelegram } from '../../hooks/useTelegram';
// import './header.css'; // Adjusted path
// import { useTelegram } from '../../hooks/useTelegram'; // Adjusted path

// const Header = () => {
//     const {user, onClose} = useTelegram();

//     return (
//         <div className={'header'}>
//             <button onClick={onClose}>Закрыть</button>
//             <span className={'username'}>
//                 {user?.username}
//             </span>
//         </div>   
//     )
// }

import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './header.css'; 

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className='header'>
            <button onClick={onClose}>Закрыть</button>
            <span className='username'>
                {user?.username}
            </span>
        </div>   
    );
}