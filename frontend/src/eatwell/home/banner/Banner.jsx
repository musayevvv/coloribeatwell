import React from 'react'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerText}>
                <h1>Welcome To EatWell</h1>
                <h2>Come and eat well with our delicious & healthy foods.</h2>
                <button>Reservation</button>
            </div>
        </section>
    )
}

export default Banner