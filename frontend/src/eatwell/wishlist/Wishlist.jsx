import React, { useEffect, useState } from 'react';
import style from './Wishlist.module.css';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    const updateWishlist = (newWishlist) => {
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        setWishlist(newWishlist);
    };

    const remove = (_id) => {
        const newWishlist = wishlist.filter(item => item._id !== _id);
        updateWishlist(newWishlist);
    };

    return (
        <div className={style.basket}>
            <h1>Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Wishlist is empty</p>
            ) : (
                <ul className={style.wishlistList}>
                    {wishlist.map(item => (
                        <li key={item._id} className={style.wishlistItem}>
                            <img src={item.image} alt={item.name} width="60" />
                            <div className={style.itemInfo}>
                                <span>{item.name}</span>
                                {item.count && <span>Quantity: {item.count}</span>}
                            </div>
                            <div className={style.basket_buttons}>
                                <button onClick={() => remove(item._id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Wishlist;
