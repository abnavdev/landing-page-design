import React, { useState } from 'react'
import styles from './PricingSection.module.css'
import expandCircleDown from '../assets/expand_circle_down.svg'
import expandCircleUp from '../assets/expand_circle_up.svg'

const PricingSection: React.FC = () => {
  const [expandedPlan, setExpandedPlan] = useState<string>('basic')

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <span className={styles.badge}>FLEXIBLE PRICING</span>

          <h2 className={styles.title}>
            Simple,<br />
            Transparent Pricing
          </h2>

          <ul className={styles.features}>
            <li>7-day free trial</li>
            <li>No credit card required</li>
            <li>Cancel anytime</li>
          </ul>

          <button className={styles.viewPlansBtn}>VIEW ALL PLANS</button>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.planCard + ' ' + (expandedPlan === 'basic' ? styles.expanded : '')}
               onClick={() => setExpandedPlan('basic')}>
            <div className={styles.planHeader}>
              <div className={styles.planInfo}>
                <h3>Basic Plan <span className={styles.highlight}>Perfect for occasional help</span></h3>
              </div>
              <span className={styles.toggleIcon}>
                {expandedPlan === 'basic' ?
                  <img src={expandCircleUp} alt="Collapse" /> :
                  <img src={expandCircleDown} alt="Expand" />
                }
              </span>
            </div>
            {expandedPlan === 'basic' && (
              <div className={styles.planDetails}>
                <ul>
                  <li>4 tutoring sessions per month</li>
                  <li>Progress tracking dashboard</li>
                  <li>Access to study resources</li>
                  <li>Email support</li>
                  <li>Session recordings</li>
                </ul>
                <div className={styles.priceTag}>
                  <span className={styles.price}>$19</span>
                  <span className={styles.period}>/Month</span>
                </div>
                <button className={styles.startTrialBtn}>Start Free Trial</button>
              </div>
            )}
          </div>

          <div className={styles.planCard + ' ' + (expandedPlan === 'standard' ? styles.expanded : '')}
               onClick={() => setExpandedPlan('standard')}>
            <div className={styles.planHeader}>
              <div className={styles.planInfo}>
                <h3>Standard - Most Popular - $39/month</h3>
              </div>
              <span className={styles.toggleIcon}>
                {expandedPlan === 'standard' ?
                  <img src={expandCircleUp} alt="Collapse" /> :
                  <img src={expandCircleDown} alt="Expand" />
                }
              </span>
            </div>
            {expandedPlan === 'standard' && (
              <div className={styles.planDetails}>
                <ul>
                  <li>12 tutoring sessions per month</li>
                  <li>Priority matching with top tutors</li>
                  <li>24/7 homework help</li>
                  <li>Progress reports for parents</li>
                  <li>Live chat support</li>
                </ul>
                <div className={styles.priceTag}>
                  <span className={styles.price}>$39</span>
                  <span className={styles.period}>/Month</span>
                </div>
                <button className={styles.startTrialBtn}>Start Free Trial</button>
              </div>
            )}
          </div>

          <div className={styles.planCard + ' ' + (expandedPlan === 'premium' ? styles.expanded : '')}
               onClick={() => setExpandedPlan('premium')}>
            <div className={styles.planHeader}>
              <div className={styles.planInfo}>
                <h3>Premium - $79/month</h3>
              </div>
              <span className={styles.toggleIcon}>
                {expandedPlan === 'premium' ?
                  <img src={expandCircleUp} alt="Collapse" /> :
                  <img src={expandCircleDown} alt="Expand" />
                }
              </span>
            </div>
            {expandedPlan === 'premium' && (
              <div className={styles.planDetails}>
                <ul>
                  <li>Unlimited tutoring sessions</li>
                  <li>Dedicated success manager</li>
                  <li>Test prep included</li>
                  <li>College counseling</li>
                  <li>Priority 24/7 support</li>
                </ul>
                <div className={styles.priceTag}>
                  <span className={styles.price}>$79</span>
                  <span className={styles.period}>/Month</span>
                </div>
                <button className={styles.startTrialBtn}>Start Free Trial</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection