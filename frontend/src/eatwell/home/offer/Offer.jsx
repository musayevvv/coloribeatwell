import React, { useEffect, useState } from 'react';
import styles from './Offer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducer/productSlice';

const Offer = () => {
    const dispatch = useDispatch();
    const [basket, setBasket] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('Default');
    const { product, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsThunk());
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setBasket(storedBasket);
        setWishlist(storedWishlist);
    }, [dispatch]);

    const addToBasket = (item) => {
        const updatedBasket = [...basket];
        const existingItem = updatedBasket.find((i) => i._id === item._id);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            updatedBasket.push({ ...item, count: 1 });
        }

        localStorage.setItem('basket', JSON.stringify(updatedBasket));
        setBasket(updatedBasket);
    };

    const toggleWishlist = (item) => {
        const updatedWishlist = [...wishlist];
        const index = updatedWishlist.findIndex((i) => i._id === item._id);

        if (index > -1) {
            // Remove from wishlist
            updatedWishlist.splice(index, 1);
        } else {
            // Add to wishlist
            updatedWishlist.push(item);
        }

        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    };

    const isInWishlist = (id) => wishlist.some((item) => item._id === id);

    const filteredProducts = product
        ?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'asc') return Number(a.price) - Number(b.price);
            if (sort === 'desc') return Number(b.price) - Number(a.price);
            return 0;
        });

    if (loading) return <span>Yükleniyor...</span>;
    if (error) return <span>Yükleme sırasında bir hata oluştu.</span>;

    return (
        <section className={styles.offerSection}>
            <div className={styles.container}>
                <div className={styles.offerDiv}>
                    <div className={styles.offerText}>
                        <h4>Our Offers</h4>
                        <h2>Our Offer This Summer</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                    </div>

                    <div className={styles.inputBox}>
                        <input
                            type="text"
                            placeholder="Search product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => setSort('asc')}>Ucuzdan Bahaliya</button>
                        <button onClick={() => setSort('desc')}>Bahalidan Ucuza</button>
                    </div>

                    <div className={styles.offerBox}>
                        {filteredProducts?.slice(0, 3).map((item) => (
                            <div className={styles.offerProduct} key={item._id}>
                                <div className={styles.productImage}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.productBody}>
                                    <h5>${item.price}</h5>
                                    <h5>{item.name}</h5>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                    <button onClick={() => addToBasket(item)}>Add To Basket</button>
                                    <button onClick={() => toggleWishlist(item)}>
                                        {isInWishlist(item._id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
