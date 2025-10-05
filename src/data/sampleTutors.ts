import type { TutorData } from '../types/TutorTypes'
import ashley from '../assets/ashley.jpg'
import chen from '../assets/chen.jpg'
import sarah from '../assets/sarah.jpg'

export const sampleTutors: TutorData[] = [
  {
    id: "tutor-001",
    name: "Ashley Anderson",
    location: "California, USA",
  profileImage: ashley,
  heroImage: ashley,
    subjects: ["SAT Prep", "History", "Geometry", "Algebra"],
    description: "Experienced SAT Prep tutor with 12 years of teaching experience.",
    keyAchievements: [
      "+231 avg improvement",
      "34+ students to top colleges"
    ],
    pricing: {
      amount: 50,
      unit: "hour"
    },
    availability: {
      responseTime: "< 2hours",
      schedule: "Flexible schedule",
      languages: ["English"]
    },
    stats: {
      rating: 4.5,
      reviewCount: 22,
      successRate: 95,
      yearsExperience: 11
    },
    isFavorite: false
  },
  {
    id: "tutor-002",
    name: "Michael Chen",
    location: "New York, USA",
  profileImage: chen,
  heroImage: chen,
    subjects: ["AP Physics", "Calculus", "Computer Science", "Chemistry", "Statistics"],
    description: "MIT graduate specializing in STEM subjects with proven track record.",
    keyAchievements: [
      "15 perfect AP scores",
      "Published research mentor",
      "98% pass rate on AP exams"
    ],
    pricing: {
      amount: 75,
      unit: "hour"
    },
    availability: {
      responseTime: "< 24hours",
      schedule: "Evenings & Weekends",
      languages: ["English", "Mandarin"]
    },
    stats: {
      rating: 4.9,
      reviewCount: 48,
      successRate: 98,
      yearsExperience: 8
    },
    isFavorite: false
  },
  {
    id: "tutor-003",
    name: "Sarah Williams",
    location: "Texas, USA",
  profileImage: sarah,
  heroImage: sarah,
    subjects: ["English Literature", "Essay Writing", "Creative Writing"],
    description: "Award-winning English teacher helping students excel in writing and literature.",
    keyAchievements: [
      "200+ college essays edited",
      "National writing competition judge"
    ],
    pricing: {
      amount: 60,
      unit: "hour"
    },
    availability: {
      responseTime: "< 4hours",
      schedule: "Flexible schedule",
      languages: ["English", "Spanish"]
    },
    stats: {
      rating: 4.7,
      reviewCount: 35,
      successRate: 92,
      yearsExperience: 15
    },
    isFavorite: true
  }
]
