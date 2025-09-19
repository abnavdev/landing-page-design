import styles from './AboutReview.module.css';

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
          <div className={styles.reviewText}>Sarah went from struggling with math to scoring 1480 on her SAT and getting into Stanford.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Sarah C.</div>
              <div className={styles.location}>280+ SAT Points</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Michael transformed his study habits and raised his GPA to earn a full scholarship.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
            <div className={styles.reviewerMeta}>
              <div className={styles.name}>Michael R.</div>
              <div className={styles.location}>3.2 → 4.0 GPA</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.reviewText}>Emma overcame test anxiety and got into her dream college with personalized support.</div>
          <div className={styles.reviewerInfo}>
            <img className={styles.smallAvatar} src="https://placehold.co/80x80" alt="avatar" />
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
