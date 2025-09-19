import React from 'react'
import '../styles/TutorCard.css'
import type { TutorData } from '../types/TutorTypes'
import { sampleTutors } from '../data/sampleTutors'

// Icons as simple SVG components
const LocationIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 5.5 8 12 8 12s8-6.5 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="currentColor">
    <path d="M10 0l2.36 7.28h7.64l-6.18 4.5 2.36 7.22L10 14.5 3.82 19l2.36-7.22L0 7.28h7.64L10 0z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="19" height="11" viewBox="0 0 19 11" fill="currentColor">
    <path d="M6.5 11L0 4.5l1.4-1.4L6.5 8.2 16.6 0 18 1.4 6.5 11z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H9v6l5.3 3.2.7-1.2-4.5-2.7V5z"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
    <path d="M14 2V0H0v2c0 2.2 1.8 4 4 4 .4.6.9 1.1 1.5 1.4-.3.3-.5.8-.5 1.3 0 .8.5 1.5 1.3 1.7V18h1.4v-7.6c.8-.2 1.3-.9 1.3-1.7 0-.5-.2-1-.5-1.3.6-.3 1.1-.8 1.5-1.4 2.2 0 4-1.8 4-4z"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor">
    <path d="M20 4h-4V2c0-1.1-.9-2-2-2H8C6.9 0 6 .9 6 2v2H2C.9 4 0 4.9 0 6v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 2h6v2H8V2z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor">
    <path d="M10 18l-1.45-1.32C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.78-3.4 6.86-8.55 11.18L10 18z"/>
  </svg>
);

interface TutorCardProps {
  data?: TutorData;
}

const TutorCard: React.FC<TutorCardProps> = ({ data = sampleTutors[0] }) => {
  const visibleSubjects = data.subjects.slice(0, 3);
  const remainingCount = data.subjects.length - 3;

  return (
    <div className="tutor-card">
      <div className="tutor-card__content">
        <div className="tutor-card__header">
          <img 
            className="tutor-card__profile-image" 
            src={data.profileImage} 
            alt={`${data.name} profile`}
          />
          <div className="tutor-card__info">
            <div className="tutor-card__basic-info">
              <h2 className="tutor-card__name">{data.name}</h2>
              <div className="tutor-card__location">
                <LocationIcon />
                <span>{data.location}</span>
              </div>
            </div>
            <div className="tutor-card__subjects">
              {visibleSubjects.map((subject, index) => (
                <span key={index} className="tutor-card__subject-tag">
                  {subject}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="tutor-card__subject-tag tutor-card__subject-tag--more">
                  + {remainingCount} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="tutor-card__details">
          <p className="tutor-card__description">{data.description}</p>
          <div className="tutor-card__achievements">
            <h3 className="tutor-card__achievements-title">Key Achievements:</h3>
            {data.keyAchievements.map((achievement, index) => (
              <div key={index} className="tutor-card__achievement">
                <CheckIcon />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tutor-card__sidebar">
        <div className="tutor-card__pricing-section">
          <div className="tutor-card__price">
            <span className="tutor-card__price-amount">${data.pricing.amount}</span>
            <span className="tutor-card__price-unit">/{data.pricing.unit}</span>
          </div>
          <div className="tutor-card__availability">
            <div className="tutor-card__response-time">
              <ClockIcon />
              <span>{data.availability.responseTime}</span>
            </div>
            <div className="tutor-card__schedule-info">
              <div className="tutor-card__schedule">{data.availability.schedule}</div>
              <div className="tutor-card__languages">
                Languages: {data.availability.languages.join(", ")}
              </div>
            </div>
          </div>
        </div>

        <div className="tutor-card__stats">
          <div className="tutor-card__stat">
            <div className="tutor-card__stat-value">
              <span>{data.stats.rating}</span>
              <StarIcon />
            </div>
            <div className="tutor-card__stat-label">({data.stats.reviewCount} reviews)</div>
          </div>
          <div className="tutor-card__stat">
            <div className="tutor-card__stat-value">
              <span>{data.stats.successRate}%</span>
              <TrophyIcon />
            </div>
            <div className="tutor-card__stat-label">success rate</div>
          </div>
          <div className="tutor-card__stat">
            <div className="tutor-card__stat-value">
              <span>{data.stats.yearsExperience}+</span>
              <ExperienceIcon />
            </div>
            <div className="tutor-card__stat-label">years experience</div>
          </div>
        </div>

        <div className="tutor-card__actions">
          <button className="tutor-card__button tutor-card__button--primary">
            Book Free Demo
          </button>
          <button className="tutor-card__button tutor-card__button--secondary">
            View Profile
          </button>
        </div>

        <button className="tutor-card__favorite" aria-label="Add to favorites">
          <HeartIcon />
        </button>
      </div>

      {/* Hover preview that appears on the right/top when the card is hovered */}
      <div className="tutor-card__preview" aria-hidden>
        <div
          className="preview-hero"
          style={{ backgroundImage: `url(${data.profileImage})` }}
        >
          <div className="preview-hero-box preview-box-2" />
        </div>

        <div className="preview-cta">
          <div className="preview-cta-text">View Full Schedule</div>
        </div>

        <div className="preview-cta">
          <div className="preview-cta-text">See {data.name}’s Profile</div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
