// import React from 'react';
// import './button.css'; 

// const Button = (props) => {
//     return (
//         <button{...props} className={'button' + props.className}/>
//     )
// }

// export default Button;

// import React from 'react';
// import './button.css'; 

// const Button = (props) => {
//     const { className, ...rest } = props;
//     return (
//         <button {...rest} className={`button ${className || ''}`} />
//     )
// }

// export default Button;

import React from 'react';
import './button.css'; 

const Button = (props) => {
    const { className, ...restProps } = props;
    return (
        <button {...restProps} className={`button ${className}`}>
            {props.children}
        </button>
    );
}

export default Button;

