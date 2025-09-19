import React from 'react'
import styles from '../styles/TeamSection.module.css'

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Gowrishankar Chelliah',
      role: 'Co-Founder',
      description: 'Visionary leader passionate about transforming education through technology and personalized learning experiences.',
      image: '👨‍💼'
    },
    {
      name: 'Pari Sivakumar',
      role: 'Co-Founder',
      description: 'Education innovator dedicated to making quality tutoring accessible to students worldwide.',
      image: '👩‍💼'
    }
  ]

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <p className={styles.sectionSubtitle}>
          Passionate educators and innovators dedicated to transforming how students learn and succeed.
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.memberImage}>{member.image}</div>
              <h3 className={styles.memberName}>
                {member.name} <span className={styles.memberRole}>| {member.role}</span>
              </h3>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection