import React from 'react';
import styles from "./ContactPage.module.scss"
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import ContactIntro from '../../Components/NewsBlock/Contact/ContactIntro';

function ContactPage(props) {
    return (
        <div className={styles.contact}>
            <Header filled = { false } />
                <ContactIntro/>
            <Footer/>
        </div>
    );
}

export default ContactPage;