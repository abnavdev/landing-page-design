import React, { useState } from 'react'
import styles from '../styles/StatsSection.module.css'
import expandCircleDown from '../assets/expand_circle_down.svg'
import expandCircleUp from '../assets/expand_circle_up.svg'

interface Stat {
  value: string
  label: string
}

interface FAQ {
  id: string
  question: string
  answer: string
}

const StatsSection: React.FC = () => {
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set(['faq-0']))

  const stats: Stat[] = [
    { value: '10,000+', label: 'STUDENTS IMPROVING THEIR GRADES' },
    { value: '500+', label: 'VERIFIED EXPERT TUTORS' },
    { value: '50+', label: 'SUBJECTS COVERED' },
    { value: '4.9/5', label: 'AVERAGE TUTOR RATING' },
    { value: '2 Million+', label: 'TUTORING HOURS COMPLETED' },
    { value: '95%', label: 'OF STUDENTS IMPROVE BY ONE LETTER GRADE' }
  ]

  const faqs: FAQ[] = [
    {
      id: 'faq-0',
      question: 'How quickly can I get started?',
      answer: 'You can book your first session within minutes of signing up. Most students are matched with a tutor and learning within 24 hours.'
    },
    {
      id: 'faq-1',
      question: 'Are the tutors qualified?',
      answer: 'Every tutor goes through rigorous screening including background checks, degree verification, and teaching assessments. Only 3% of applicants are accepted.'
    },
    {
      id: 'faq-2',
      question: "What if I don't like my tutor?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your tutor, we'll match you with a new one at no extra cost. You can switch tutors anytime."
    },
    {
      id: 'faq-3',
      question: 'How do online sessions work?',
      answer: 'Sessions take place in our interactive virtual classroom with video chat, screen sharing, and a collaborative whiteboard. All sessions are recorded for review.'
    },
    {
      id: 'faq-4',
      question: 'Can parents monitor progress?',
      answer: 'Yes! Parents receive weekly progress reports, can view session recordings, and have access to a dedicated parent dashboard to track improvement.'
    },
    {
      id: 'faq-5',
      question: 'What subjects do you cover?',
      answer: 'We cover all core subjects including Math, Science, English, History, and Foreign Languages, plus test prep for SAT, ACT, AP exams, and more.'
    }
  ]

  const handleFAQToggle = (faqId: string) => {
    setExpandedFAQs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(faqId)) {
        newSet.delete(faqId)
      } else {
        newSet.add(faqId)
      }
      return newSet
    })
  }

  const handleFAQKeyDown = (event: React.KeyboardEvent, faqId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleFAQToggle(faqId)
    }
  }

  return (
    <section className={styles.statsSection} aria-labelledby="stats-heading">
      <div className={styles.separator} role="presentation" aria-hidden="true"></div>

      {/* Stats Grid */}
      <div 
        className={styles.statsGrid}
        role="region"
        aria-label="Platform statistics"
      >
        {stats.map((stat, index) => (
          <article 
            key={index} 
            className={styles.statItem}
            aria-label={`${stat.value} ${stat.label.toLowerCase()}`}
          >
            <div className={`${styles.statValue} ${styles.statValueWithUnderline}`}>
              <span aria-hidden="true">{stat.value}</span>
              <span className={styles['sr-only']}>{stat.value}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </article>
        ))}
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <header className={styles.faqHeader}>
          <h2 id="faq-heading" className={styles.faqTitle}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqIntro}>
            <p className={styles.faqSubtitle}>
              <strong>Questions? We Have Answers</strong>
            </p>
          </div>
        </header>

        <div 
          className={styles.faqAccordion}
          role="region"
          aria-labelledby="faq-heading"
        >
          {faqs.map((faq) => {
            const isExpanded = expandedFAQs.has(faq.id)
            const headingId = `faq-heading-${faq.id}`
            const panelId = `faq-panel-${faq.id}`

            return (
              <article
                key={faq.id}
                className={`${styles.faqItem} ${isExpanded ? styles.active : ''}`}
                aria-labelledby={headingId}
              >
                <h3 id={headingId} className={styles.faqQuestionHeading}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => handleFAQToggle(faq.id)}
                    onKeyDown={(e) => handleFAQKeyDown(e, faq.id)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    type="button"
                  >
                    <span className={styles.faqQuestionText}>
                      {faq.question}
                    </span>
                    <span className={styles.faqToggle} aria-hidden="true">
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
                  className={styles.faqAnswer}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isExpanded}
                  aria-hidden={!isExpanded}
                >
                  <div className={styles.faqAnswerContent}>
                    {faq.answer}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection