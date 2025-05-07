import React from 'react'
import styles from './OurStory.module.css'

const OutStory = () => {
    return (
        <section className={styles.ourSection}>
            <div className={styles.container}>
                <div className={styles.welcome}>
                    <div className={styles.ourLeft}>
                        <h4>Our Story</h4>
                        <h2>Welcome</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <button>Learn More About Us</button>
                    </div>
                    <div className={styles.ourRight}><img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default OutStory