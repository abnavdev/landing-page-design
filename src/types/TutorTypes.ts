export interface TutorData {
  id: string;
  name: string;
  location: string;
  profileImage?: string;
  heroImage?: string;
  subjects: string[];
  description: string;
  keyAchievements: string[];
  pricing: {
    amount: number;
    unit: string;
  };
  availability: {
    responseTime: string;
    schedule: string;
    languages: string[];
  };
  stats: {
    rating: number;
    reviewCount: number;
    successRate: number;
    yearsExperience: number;
  };
  isFavorite?: boolean;
}
