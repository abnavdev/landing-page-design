import type { ReactElement } from 'react';
import styles from '../styles/Footer.module.css';
import Button from './Button';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className="container">
        <div className={styles.brand}>
            <img src="/src/assets/logo.png" alt="Ferryly logo" className={styles.logo} />
            <div className={styles.brandText}>
              <div className={styles.brandTitle}>Ferryly</div>
              <div className={styles.brandSub}>Your journey to academic excellence</div>
              <div className={styles.socials} style={{marginTop:8}}>
                <a className={styles.socialBtn} href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
                  </svg>
                </a>
                <a className={styles.socialBtn} href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.54 8.54 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.26 3.88A12.08 12.08 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.68 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.07 12.07 0 0 0 6.54 1.92c7.85 0 12.15-6.5 12.15-12.12v-.55A8.72 8.72 0 0 0 22.46 6z" />
                  </svg>
                </a>
                <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17.34V10.5H5.67v6.84h2.67zM7 9.36a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08zM18.34 17.34V13c0-2.34-1.25-3.42-2.92-3.42-1.34 0-1.93.74-2.26 1.26v-1.08H10.5v6.58h2.67v-3.67c0-.98.18-1.95 1.4-1.95 1.2 0 1.2 1.11 1.2 2.03v4.59H18.34z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        <nav className={styles.links} aria-label="Footer navigation">
            <div className={styles.linkCol}>
              <div className={styles.colTitle}>Product</div>
              <a className={styles.link} href="#">Find Tutors</a>
              <a className={styles.link} href="#">How It Works</a>
              <a className={styles.link} href="#">Pricing</a>
            </div>  
            <div className={styles.linkCol}>
              <div className={styles.colTitle}>Success Stories</div>
              <a className={styles.link} href="#">Become a Tutor</a>
              <a className={styles.link} href="#">Support</a>
              <a className={styles.link} href="#">Legal</a>
            </div>
            <div className={styles.linkCol}>
              <div className={styles.colTitle}>Help Center</div>
              <a className={styles.link} href="mailto:support@ferryly.com">support@ferryly.com</a>
              <a className={styles.link} href="#">1-800-FERRYLY</a>
              <a className={styles.link} href="#">Live Chat</a>
            </div>
        </nav>

        <aside className={styles.newsletter} aria-label="Subscribe newsletter">
            <div className={styles.colTitle}>Subscribe Newsletter</div>
            <div>Get Study Tips & Resources</div>
            <div className={styles.subscribeRow}>
              <input className={styles.input} type="email" placeholder="Enter your email" aria-label="email" />
              <Button type="button" variant="primary" className={styles.btn}>SUBSCRIBE</Button>
            </div>
        </aside>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div>© 2025 Ferryly. All rights reserved.</div>
          <div className={styles.legalLinks}>
            <a className={styles.link} href="#">Privacy Policy</a>
            <a className={styles.link} href="#">Terms and Conditions</a>
            <a className={styles.link} href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
