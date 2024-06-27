import React from 'react';
import './productList.css'
import productItem from "../productItem/productItem";
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {id: '1', title: 'RP', price: 300, description: "Выгодно"},
    {id: '2', title: 'Кристалы Сотворения', price: 500, description: "Выгодно"},
]

const getTotalPrice = (items =[]) => {
    return items.reduce((acc, item) =>{
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const{tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems =[];

        if(alreadyAdded){
            newItems = addedItems.filter(item => item.id !== product.id);

        }
        else{
            newItems = {...addedItems, product}
        }

        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: 'Купить ${getTotalPrice(newItems)}'
            });
        }
    }

    return(
        <div className={'list'}>
            {products.map(item =>(
                <productItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}

        </div>
    )
}

export default ProductList;