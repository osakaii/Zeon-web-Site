import React from 'react';
import styles from './BlogPage.module.scss'
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';

function BlogPage(props) {
    return (
        <div className={styles.blog}>
            <Header filled = { true }/>
            <Footer/>
        </div>
    );
}

export default BlogPage;