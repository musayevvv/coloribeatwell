import React from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {

    const image = [
        {
            img: 'https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg'
        },
        {
            img: 'https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg'
        },
        {
            img: 'https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg'
        },
        {
            img: '	https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg'
        },
        {
            img: 'https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg'
        },
        {
            img: 'https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg'
        },
    ]

    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <div className={styles.galleryDiv}>
                    <div className={styles.galleryText}>
                        <h2>Gallery</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className={styles.galleryBox}>
                        {image.map((card, index) => (
                            <div key={index} className={styles.imageCard}>
                                <img src={card.img} alt={card.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
