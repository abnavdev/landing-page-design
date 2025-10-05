import styles from '../styles/AboutReview.module.css';
import ashley from '../assets/ashley.jpg'
import chen from '../assets/chen.jpg'
import sarah from '../assets/sarah.jpg'

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.leftGroup}>
            <div className={styles.mainTitle}>Success Stories</div>
            <div className={styles.subtitle}>Every student's journey is unique. Here are just a few of the amazing transformations we've been privileged to be part of.</div>
          </div>
          <div className={styles.rightGroup}>
            <div className={styles.satStat}>
              <div className={styles.number}>280+</div>
              <div className={styles.label}>SAT Points</div>
            </div>
            <div className={styles.ratingStat}>
              <div className={styles.ratingTop}>
                <div className={styles.ratingNumber}>4.9</div>
                <div className={styles.stars} aria-hidden>
                  {/* five inline SVG stars */}
                  <svg className={styles.star} viewBox="0 0 24 24" fill="#FD961E" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.21l8.2-1.192z" />
                  </svg>
                  <svg className={styles.star} viewBox="0 0 24 24" fill="#FD961E" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.21l8.2-1.192z" />
                  </svg>
                  <svg className={styles.star} viewBox="0 0 24 24" fill="#FD961E" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.21l8.2-1.192z" />
                  </svg>
                  <svg className={styles.star} viewBox="0 0 24 24" fill="#FD961E" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.21l8.2-1.192z" />
                  </svg>
                  <svg className={styles.star} viewBox="0 0 24 24" fill="#FD961E" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.897l-7.336 3.873 1.402-8.173L.132 9.21l8.2-1.192z" />
                  </svg>
                </div>
              </div>
              <div className={styles.label}>2,488 Rating</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviewsSection}>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Sarah went from struggling with math to scoring 1480 on her SAT and getting into Stanford. Her tutor provided structured lessons and weekly practice plans that made complex concepts feel approachable. We saw steady improvement and increased confidence.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src={sarah} alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Sarah C.</div>
              <div className={styles.location}>280+ SAT Points</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Michael completely transformed his study habits and raised his GPA from a 3.2 to a 3.9, which helped him secure a full academic scholarship. The tutor focused on time management, exam strategies, and targeted review — the results were beyond our expectations.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src={chen} alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Michael R.</div>
              <div className={styles.location}>3.2 → 4.0 GPA</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Emma overcame severe test anxiety with compassionate, personalized coaching and practical breathing techniques. Her tutor built a steady routine of practice tests and detailed feedback, which not only improved scores but also her confidence.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src={ashley} alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Emma T.</div>
              <div className={styles.location}>Dream School Admit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
