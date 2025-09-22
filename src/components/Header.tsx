import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import logo from '../assets/logo.png'
import Button from './Button'
import useScrollNavigation from '../hooks/useScrollNavigation'

interface HeaderProps {
  forceBlue?: boolean;
}

const Header: React.FC<HeaderProps> = ({ forceBlue = false }) => {
  // NEW: State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // NEW: Use scroll navigation hook
  const { isHidden, hasScrolled } = useScrollNavigation()

  // NEW: Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ''} ${hasScrolled ? styles.scrolled : ''} ${forceBlue ? styles.forceBlue : ''}`}>
      <div className="container">
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <div className={styles.nav}>
          <Link to="/" className={`${styles.navItem} nav-item ${forceBlue ? 'force-blue-text' : ''}`}>Home</Link>
          <Link to="/about" className={`${styles.navItem} nav-item ${forceBlue ? 'force-blue-text' : ''}`}>About</Link>
          <Link to="/how-it-works" className={`${styles.navItem} nav-item ${forceBlue ? 'force-blue-text' : ''}`}>How it works</Link>
          <Link to="/tutors" className={`${styles.navItem} nav-item ${forceBlue ? 'force-blue-text' : ''}`}>Find Tutors</Link>
          <Link to="/pricing" className={`${styles.navItem} nav-item ${forceBlue ? 'force-blue-text' : ''}`}>Pricing</Link>
            <div className={styles.buttons}>
            <Button variant="secondary" className={`${styles.loginOverride} login-override ${forceBlue ? 'force-blue-login' : ''}`}>Login</Button>
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
        <Link to="/" className={`${styles.mobileNavItem} nav-item`} onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/about" className={`${styles.mobileNavItem} nav-item`} onClick={toggleMobileMenu}>
          About
        </Link>
        <Link to="/how-it-works" className={`${styles.mobileNavItem} nav-item`} onClick={toggleMobileMenu}>
          How it works
        </Link>
        <Link to="/tutors" className={`${styles.mobileNavItem} nav-item`} onClick={toggleMobileMenu}>
          Find Tutors
        </Link>
        <Link to="/pricing" className={`${styles.mobileNavItem} nav-item`} onClick={toggleMobileMenu}>
          Pricing
        </Link>
        <div className={styles.mobileButtons}>
          <button className={`${styles.secondaryBtn} login-override`} onClick={toggleMobileMenu}>
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