import React, { memo } from 'react';
import styles from '../css/header.module.css';

const Header = memo(({ username, onLogout, onMyslips, onAllslips }) => {
    
    const logoPosition = username ? styles.left : styles.center;

    return (
        <header className={`${styles.header} ${logoPosition}`}>
        <div className={styles.logo}>
            <svg className={styles.logoImg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M50,0A50,50,0,0,0,6.7,75L20.41,51.24Z" />
                <path d="M50,0h0l43.3,75A50,50,0,0,0,50,0Z" />
                <path d="M25,75h0A25,25,0,0,1,48.41,50.06,50,50,0,0,0,6.71,75,50,50,0,0,0,50,100,25,25,0,0,1,25,75Z" />
                <path d="M51.59,50.06A25,25,0,0,1,75,75h0a25,25,0,0,1-25,25A50,50,0,0,0,93.29,75,50,50,0,0,0,51.59,50.06Z" />
            </svg>
            <h1 className={styles.logoName}>SLIP</h1>
            {username && <span className={styles.logoUser}>@{username}</span>}
        </div>
        {username && (
            <nav className={styles.menu}>
            <button className={styles.menuItem}  onClick={onAllslips}>All slips</button>
            <button className={styles.menuItem}  onClick={onMyslips}>My slips</button>
            <button className={styles.menuItem} onClick={onLogout}>
                Logout
            </button>
            </nav>
        )}
        </header>
    );
});

export default Header;
