import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Dashboard.module.css"
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../redux/reducer/productSlice';

const Basket = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            image: '',
        },
        onSubmit: values => {
            if (!values.name || !values.price || !values.image) {
                alert('Zəhmət olmasa boş qoymayın');
            } else {
                dispatch(postProductsThunk(values));
                formik.resetForm();
            }
        },
    });

    if (error) return <span>Yükləmə zamanı xəta baş verdi</span>;
    if (loading) return <span>Yüklənir...</span>;

    return (
        <div className={styles.container}>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                <button type="submit">Submit</button>
            </form>

            <div className={styles.productBox}>
                {product.map((item) => (
                    <div className={styles.product} key={item._id}>
                        <div className={styles.image}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className={styles.body}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button className={styles.dltbtn} onClick={() => dispatch(deleteProductsThunk(item._id))}>
                                Sil
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Basket;
