// import React from 'react';
// import "./productItem.css";
// import Button from '../button/button';

// const ProductItem = ({ product, className, onAdd }) => {

//     const onAddHandler = () => {
//         onAdd(product);
//     }

//     return (
//         <div className={'product ' + className}>
               
//             <div className={'img'}>
//                 <img src={product.img} alt={product.title} />
//             </div>
//             <div className={'title'}> {product.title} </div>
//             <div className={'description'}>{product.description}</div>
//             <div className={'price'}>
//                 <span>Стоимость: <b>{product.price} руб</b></span>
//             </div>
//             <Button className={'add-btn'} onClick={onAddHandler}>
//                 Добавить в корзину
//             </Button>
//         </div>
//     );
// }

// export default ProductItem;

import React from 'react';
import "./productItem.css";
import Button from '../button/button';

const ProductItem = ({ product, className, onAdd }) => {

    const getProductClassName = (productTitle) => {
        let productClass = '';
        switch (productTitle.toLowerCase()) {
            case 'nitro accessories':
                productClass = 'nitro-accessories';
                break;
            case 'clash':
                productClass = 'clash';
                break;
            case 'royale':
                productClass = 'royale';
                break;
            case 'clash royale gems':
                productClass = 'clash-royale-gems';
                break;
            default:
                productClass = '';
                break;
        }
        return productClass;
    }

    const onAddHandler = () => {
        onAdd(product);
    }

    const productClass = getProductClassName(product.title);

    return (
        <div className={`product ${productClass} ${className}`}>
            {/* <div className="img" style={{ height: productClass === 'nitro-accessories' && productClass === 'clash' && productClass === 'royale' ? '100px' : '30px' }}>  */}
            <div className="img"> 
                <img src={product.img} alt={product.title} />
            </div>
            <div className="title"> {product.title} </div>
            <div className="description">{product.description}</div>
            <div className="price">
                <span>Стоимость: <b>{product.price} руб</b></span>
            </div>
            <Button className="add-btn" onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
}

export default ProductItem;

