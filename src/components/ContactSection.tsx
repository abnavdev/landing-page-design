import React from 'react';
import styles from '../styles/ContactSection.module.css';

interface ContactCard {
  iconColor?: { width: number; height: number };
  title: string;
  primaryInfo: string;
  secondaryInfo: string;
}

const ContactSection: React.FC = () => {
  const contactCards: ContactCard[] = [
    {
      iconColor: { width: 150, height: 120 },
      title: 'Email Us',
      primaryInfo: 'hello@ferryly.com',
      secondaryInfo: 'Send us an email anytime'
    },
    {
      iconColor: { width: 135, height: 135 },
      title: 'Call Us',
      primaryInfo: '+1 (555) 123-4567',
      secondaryInfo: 'Mon-Fri 9AM-6PM PST'
    },
    {
      iconColor: { width: 120, height: 150 },
      title: 'Visit Us',
      primaryInfo: 'San Francisco, CA',
      secondaryInfo: 'Schedule an appointment'
    },
    {
      iconColor: { width: 150, height: 150 },
      title: 'Response Time',
      primaryInfo: '< 24 hours',
      secondaryInfo: 'We respond quickly'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          Have questions about Ferryly? We're here to help you succeed. Reach out to our team anytime.
        </p>
      </div>
      
      <div className={styles.cardsContainer}>
        {contactCards.map((card, index) => (
          <div key={index} className={`${styles.card} ${index === 3 ? styles.cardLast : ''}`}>
            <div 
              className={styles.iconColor}
              style={{ 
                width: card.iconColor?.width, 
                height: card.iconColor?.height 
              }}
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardPrimary}>{card.primaryInfo}</p>
            <p className={styles.cardSecondary}>{card.secondaryInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;