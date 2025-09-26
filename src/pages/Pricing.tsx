import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import PricingHero from '../components/PricingHero'
import PriceTier from '../components/PriceTier'
import '../styles/Pricing.css'
import '../styles/Pricing.css'
import ScrollIndicator from '../components/ScrollIndicator'
import ParallaxSection from '../components/ParallaxSection'
import Decorators from '../components/common/Decorators'

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  // base monthly rates as numbers for calculation
  const baseRates = {
    basic: 99,
    essential: 199,
    elite: 349,
  }

  const formatCurrency = (n: number) => {
    // round to whole dollars for simplicity
    return `$${Math.round(n)}`
  }

  // annual pricing uses a 10% discount on the yearly total
  const annualMultiplier = 12 * 0.9

  const priceFor = (tier: 'basic' | 'essential' | 'elite') => {
    if (billing === 'monthly') {
      return { price: formatCurrency(baseRates[tier]), suffix: '/month' }
    }
    const annualTotal = baseRates[tier] * annualMultiplier
    return { price: formatCurrency(annualTotal), suffix: '/year' }
  }

  return (
    <div className="parallax-container pricing-page">
  <Header />
  <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <PricingHero />
          <Decorators count={2} seed={10} />
        </div>
  </ParallaxSection>
      <section style={{padding: '80px 0'}}>
        {/* Billing toggle (kept outside the grid container so tiers can use the 12-col grid) */}
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 32}}>
          <div className="billing-toggle" role="tablist" aria-label="Billing cycle">
            <button
              className={`option ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
            >
              Monthly
            </button>
            <button
              className={`option ${billing === 'annual' ? 'active' : ''}`}
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="container">
          {/* Pricing tiers - computed from billing state */}
          <div className="tier">
            {(() => {
              const p = priceFor('basic')
              return <PriceTier title="Basic" subtitle="Perfect for getting started with personalized tutoring" price={p.price} priceSuffix={p.suffix} features={[{label: '4 hours of tutoring per month'},{label: 'Subject specialization'},{label: 'Progress tracking dashboard'},{label: 'Homework support'},{label: 'Basic parent updates'},{label: 'Mobile app access'},{label: 'Email support'}]} />
            })()}
          </div>
          <div className="tier">
            {(() => {
              const p = priceFor('essential')
              return <PriceTier title="Essential" subtitle="Perfect for getting started with personalized tutoring" price={p.price} priceSuffix={p.suffix} features={[{label: '8 hours of tutoring per month'},{label: 'SAT/ACT prep included'},{label: 'College counseling sessions'},{label: 'Parent dashboard access'},{label: 'Priority tutor matching'},{label: '24/7 chat support'},{label: 'Study materials included'},{label: 'Progress reports'}]} />
            })()}
          </div>
          <div className="tier">
            {(() => {
              const p = priceFor('elite')
              return <PriceTier title="Elite" subtitle="Ultimate academic excellence package" price={p.price} priceSuffix={p.suffix} features={[{label: '16 hours of tutoring per month'},{label: 'Unlimited test prep sessions'},{label: '1-on-1 college counseling'},{label: 'Essay review service'},{label: 'Application assistance'},{label: 'Interview preparation'},{label: 'Dedicated success manager'},{label: '24/7 priority support'},{label: 'Family learning plans'}]} featured />
            })()}
          </div>
        </div>
      </section>

      <ParallaxSection speed={0.08} direction="up">
        <div style={{ position: 'relative' }}>
          <CTASection />
          <Decorators count={2} seed={10} />
        </div>
      </ParallaxSection>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default Pricing
