import React, { useEffect, useState } from 'react';
import style from './Basket.module.css';

function Basket() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        setBasket(storedBasket);
    }, []);

    const updateBasket = (newBasket) => {
        localStorage.setItem('basket', JSON.stringify(newBasket));
        setBasket(newBasket);
    };

    const increase = (_id) => {
        const newBasket = basket.map(item => {
            if (item._id === _id) {
                return { ...item, count: item.count += 1 };
            }
            return item;
        });
        updateBasket(newBasket);
    };

    const decrease = (_id) => {
        const newBasket = basket.map(item => {
            if (item._id === _id && item.count > 1) {
                return { ...item, count: item.count -= 1 };
            }
            return item;
        });
        updateBasket(newBasket);
    };

    const remove = (_id) => {
        const newBasket = basket.filter(item => item._id !== _id);
        updateBasket(newBasket);
    };

    return (
        <div className={style.basket}>
            <h1>Basket</h1>
            {basket.length === 0 ? (
                <p>Basket is empty</p>
            ) : (
                <ul>
                    {basket.map(item => (
                        <li key={item._id}>
                            <img src={item.image || item.img} alt={item.name || item.title} width="60" />
                            <span>{item.name || item.title}</span>
                            <span>Quantity: {item.count}</span>
                            <div className={style.basket_buttons}>
                                <button onClick={() => increase(item._id)}>+</button>
                                <button onClick={() => decrease(item._id)} disabled={item.count === 1}>-</button>
                                <button onClick={() => remove(item._id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Basket;
