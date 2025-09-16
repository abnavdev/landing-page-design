import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../assets/logo.png'
import Button from './Button'

const Header: React.FC = () => {
  // NEW: State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // NEW: Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <img className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.nav}>
          <div className={styles.navItem}>Find Tutors</div>
          <div className={styles.navItem}>How It Works</div>
          <div className={styles.navItem}>Pricing</div>
          <div className={styles.buttons}>
            <Button variant="secondary">Login</Button>
            <Button variant="primary">Start Free Trial</Button>
          </div>
        </div>
        
        {/* NEW: Hamburger Menu Button */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
      
      {/* NEW: Mobile Menu */}
      <nav className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          Find Tutors
        </div>
        <div className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          How It Works
        </div>
        <div className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          Pricing
        </div>
        <div className={styles.mobileButtons}>
          <button className={styles.secondaryBtn} onClick={toggleMobileMenu}>
            Login
          </button>
          <button className={styles.primaryBtn} onClick={toggleMobileMenu}>
            Start Free Trial
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header