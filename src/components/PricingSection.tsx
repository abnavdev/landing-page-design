import React, { useState } from 'react'
import styles from '../styles/PricingSection.module.css'
import expandCircleDown from '../assets/expand_circle_down.svg'
import expandCircleUp from '../assets/expand_circle_up.svg'

interface PricingPlan {
  id: string
  name: string
  description?: string
  price: number
  period: string
  features: string[]
  isPopular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Perfect for occasional help',
    price: 19,
    period: 'Month',
    features: [
      '4 tutoring sessions per month',
      'Progress tracking dashboard',
      'Access to study resources',
      'Email support',
      'Session recordings'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 39,
    period: 'Month',
    isPopular: true,
    features: [
      '12 tutoring sessions per month',
      'Priority matching with top tutors',
      '24/7 homework help',
      'Progress reports for parents',
      'Live chat support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 79,
    period: 'Month',
    features: [
      'Unlimited tutoring sessions',
      'Dedicated success manager',
      'Test prep included',
      'College counseling',
      'Priority 24/7 support'
    ]
  }
]

const PricingSection: React.FC = () => {
  const [expandedPlan, setExpandedPlan] = useState<string>('basic')

  const handleToggle = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? '' : planId)
  }

  const handleKeyDown = (event: React.KeyboardEvent, planId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(planId)
    }
  }

  return (
    <section className={styles.pricingSection} aria-labelledby="pricing-heading">
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <span className={styles.badge} role="text">FLEXIBLE PRICING</span>

          <h2 id="pricing-heading" className={styles.title}>
            Simple,<br />
            Transparent Pricing
          </h2>

          <ul className={styles.features} aria-label="Pricing benefits">
            <li>7-day free trial</li>
            <li>No credit card required</li>
            <li>Cancel anytime</li>
          </ul>

          <button 
            className={styles.viewPlansBtn}
            aria-label="View all available pricing plans"
          >
            VIEW ALL PLANS
          </button>
        </div>

        <div className={styles.rightSection}>
          <div 
            className={styles.accordionContainer}
            role="region"
            aria-label="Pricing plans"
          >
            {pricingPlans.map((plan) => {
              const isExpanded = expandedPlan === plan.id
              const headingId = `accordion-header-${plan.id}`
              const panelId = `accordion-panel-${plan.id}`

              return (
                <article 
                  key={plan.id}
                  className={`${styles.planCard} ${isExpanded ? styles.expanded : ''}`}
                  aria-labelledby={headingId}
                >
                  <h3 id={headingId} className={styles.planHeading}>
                    <button
                      className={styles.planHeader}
                      onClick={() => handleToggle(plan.id)}
                      onKeyDown={(e) => handleKeyDown(e, plan.id)}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      type="button"
                    >
                      <div className={styles.planInfo}>
                        <span className={styles.planName}>
                          {plan.name}
                          {plan.isPopular && (
                            <span className={styles.popularBadge} aria-label="Most popular plan">
                              {' - Most Popular'}
                            </span>
                          )}
                          {' - $' + plan.price + '/month'}
                          {plan.description && (
                            <span className={styles.planDescription}>
                              {' '}
                              <span className={styles.highlight}>{plan.description}</span>
                            </span>
                          )}
                        </span>
                      </div>
                      <span className={styles.toggleIcon} aria-hidden="true">
                        <img 
                          src={isExpanded ? expandCircleUp : expandCircleDown} 
                          alt=""
                          role="presentation"
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    className={styles.planDetails}
                    role="region"
                    aria-labelledby={headingId}
                    hidden={!isExpanded}
                    aria-hidden={!isExpanded}
                  >
                    <div className={styles.planContent}>
                      <ul className={styles.featuresList} aria-label={`${plan.name} features`}>
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      
                      <div className={styles.priceTag} aria-label={`Price: ${plan.price} dollars per ${plan.period}`}>
                        <span className={styles.price} aria-hidden="true">${plan.price}</span>
                        <span className={styles.period} aria-hidden="true">/{plan.period}</span>
                      </div>
                      
                      <button 
                        className={styles.startTrialBtn}
                        aria-label={`Start free trial for ${plan.name}`}
                      >
                        Start Free Trial
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection