import React, { useEffect, useState } from 'react';
import './form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [subject, setSubject] = useState(''); 

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onChangesubject = (e) =>{
        setSubject(e.target.value)
    }

    const { tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [] )

    useEffect(() => {
        if(!email || !password || !subject){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }, [email, password] )

    return(
        <div className='form'>
            <h3>Введите ваши данные</h3>
            
            <input className='input' 
            type='email' 
            placeholder='email'
            value={email}
            onChange={onChangeEmail}
            />

            <input className='input' 
            type='password' 
            placeholder='password'
            value={password}
            onChange={onChangePassword}
            />

            <select value={subject} onChange={onChangesubject} className='select' placeholder='Choose the game'>
                <option value="none">Not Selected</option>
                <option value="game">League of Legends</option>
                <option value="game">Genshin Impact</option>
                <option value="game">Wuthering Waves</option>
            </select>
        </div>
    )
}

export default Form;