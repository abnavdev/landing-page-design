import React from 'react'
import styles from '../styles/AboutStory.module.css'
import storyImage1 from '../assets/ab6599366939ceb1016065402fbd8291c0a96bf0.jpg'
import storyImage2 from '../assets/f4f6b3a7d803869031170313d2521a39a83671bf.jpg'
import storyImage3 from '../assets/d12f52111e61fc0d9fc29f6cbfa31232cf1ee790.jpg'

const AboutStory: React.FC = () => {
  const storyCards = [
    {
      title: "Our Beginning",
      description: "Ferryly was born from a simple observation: every student learns differently, yet traditional education often follows a one-size-fits-all approach. Our founders, Gowrishankar Chelliah and Pari Sivakumar, experienced this firsthand during their academic journeys.",
      image: storyImage1
    },
    {
      title: "The Challenge",
      description: "As students, they struggled to find tutors who truly understood their learning styles and could adapt their teaching methods accordingly. Inspired by this challenge, they set out to create Ferryly - a platform that matches students with the perfect tutor based on personalized learning profiles.",
      image: storyImage2
    },
    {
      title: "Our Growth",
      description: "Today, Ferryly has grown into a comprehensive educational ecosystem that supports students from middle school through college, authoritatively helping them achieve their academic goals and unlock their full potential.",
      image: storyImage3
    }
  ]

  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Story</h2>

        <div className={styles.cardsGrid}>
          {storyCards.map((card, index) => (
            <div key={index} className={styles.storyCard}>
              <div className={styles.cardImage}>
                <img src={card.image} alt={card.title} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStory