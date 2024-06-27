import React from 'react';
import "./productItem.css";
import Button from '../button/button';

const productItem = ({product, className, onAdd}) => {

    const onAddHandler = () =>{
        onAdd(product);
    }

    return(
        <div className={'product' + className}>
            <div className={'img'}/>
            <div className={'title'}>{productItem.title}</div>
            <div className={'description'}>{productItem.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    )
}

export default productItem;