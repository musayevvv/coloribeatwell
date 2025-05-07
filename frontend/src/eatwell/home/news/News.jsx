import React, { useEffect, useState } from 'react';
import styles from './News.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducer/productSlice';

const News = () => {
    const dispatch = useDispatch();
    const [basket, setBasket] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('Default');
    const { product, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsThunk());
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        setBasket(storedBasket);
    }, [dispatch]);

    const addToBasket = (item) => {
        const updatedBasket = [...basket];
        const existing = updatedBasket.find((i) => i._id === item._id);

        if (existing) {
            existing.count += 1;
        } else {
            updatedBasket.push({ ...item, count: 1 });
        }

        localStorage.setItem('basket', JSON.stringify(updatedBasket));
        setBasket(updatedBasket);
    };

    const filteredProducts = product
        ?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
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
                        <h2>News</h2>
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
                        {/* <button onClick={() => setSort('Default')}>Varsayılan</button> */}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
