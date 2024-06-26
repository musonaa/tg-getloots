import React from 'react';
import './components/button/button.css'; 

const Button = (props) => {
    return (
        <button{...props} className={'button' + props.className}/>
    )
}

export default Button;