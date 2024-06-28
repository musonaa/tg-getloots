import React, { useCallback, useEffect, useState } from 'react';
import './form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [subject, setSubject] = useState(''); 

    const { tg } = useTelegram();

    const onSendData = useCallback( () =>{
        const data ={
            email,
            password,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [email, password, subject])

    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData] )

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [] )

    //Без пустых данных
    useEffect(() => {
        if(!email || !password || !subject){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }, [email, password, subject] )



    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onChangesubject = (e) =>{
        setSubject(e.target.value)
    }


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
                <option value="League of Legends">League of Legends</option>
                <option value="Genshin Impact">Genshin Impact</option>
                <option value="Wuthering Waves">Wuthering Waves</option>
            </select>
        </div>
    )
}

export default Form;