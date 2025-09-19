import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../assets/logo.png'
import Button from './Button'
import useScrollNavigation from '../hooks/useScrollNavigation'

const Header: React.FC = () => {
  // NEW: State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // NEW: Use scroll navigation hook
  const { isHidden, hasScrolled } = useScrollNavigation()

  // NEW: Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ''} ${hasScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <div className={styles.nav}>
          <Link to="/" className={styles.navItem}>Home</Link>
          <Link to="/about" className={styles.navItem}>About</Link>
          <div className={styles.navItem}>Find Tutors</div>
          <div className={styles.navItem}>Pricing</div>
            <div className={styles.buttons}>
            <Button variant="secondary" className={styles.loginOverride}>Login</Button>
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
        <Link to="/" className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/about" className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          About
        </Link>
        <div className={styles.mobileNavItem} onClick={toggleMobileMenu}>
          Find Tutors
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