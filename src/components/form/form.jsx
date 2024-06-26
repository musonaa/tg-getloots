import React from 'react';
import './form.css';

const Form = () => {

    return(
        <div className='form'>
            <h3>Введите ваши данные</h3>
            <input className='input' type='email' placeholder='email'></input>
            <input className='input' type='password' placeholder='password'></input>
            <select className='select'>
                <option value="lol">League of Legends</option>
                <option value="gey">Genshin Impact</option>
            </select>
        </div>
    )
}

export default Form;