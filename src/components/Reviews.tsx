import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.leftGroup}>
            <img className={styles.largeAvatar} src="https://placehold.co/170x170" alt="avatar" />
            <div className={styles.mainTitle}>Real Students.<br />Real Results.</div>
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
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviewsSection}>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>I went from failing calculus to getting an A on my final exam. My tutor Sarah broke down complex problems into steps I<br />could actually understand.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Emma Chen</div>
              <div className={styles.location}>Grade 11 Student, California</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Teaching on Ferryly lets me help students while working around my PhD schedule. The platform handles everything, so I can focus on what I love - teaching chemistry.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Dr. Priya Patel</div>
              <div className={styles.location}>Chemistry Tutor, New York</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>My son was struggling with reading comprehension and falling behind. After just two months with his Ferryly tutor, he's reading above grade level and actually enjoys his homework time.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Marcus Williams</div>
              <div className={styles.location}>Parent, Texas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
