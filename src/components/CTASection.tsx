import React from 'react'
import styles from './CTASection.module.css'

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.topBanner}>
        <div className={styles.bannerContent} data-text="NO CREDIT CARD REQUIRED • 7-DAY FREE TRIAL">
          •NO CREDIT CARD REQUIRED • 7-DAY FREE TRIAL 
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              Ready to Unlock<br />
              Your Full Potential?
            </h1>
            <p className={styles.description}>
              Join thousands of students who are already achieving their academic<br />
              goals with personalized tutoring that actually works.
            </p>
            <button className={styles.ctaButton}>
              START YOUR FREE TRIAL
            </button>
          </div>

          <div className={styles.rightContent}>
            <form className={styles.signupForm}>
              <div className={styles.formInputs}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitButton}>
                  Schedule a Demo
                </button>
              </div>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span>I agree that my submitted data is being collected and stored.</span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection