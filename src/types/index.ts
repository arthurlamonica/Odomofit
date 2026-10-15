export type UserRole = 'praticante' | 'atleta' | 'personal';

export interface ExerciseItem {
  id: string;
  name: string;
  muscle: string;
  sets: number;
  reps: string;
  weight: number;
  restSeconds: number;
  completed: boolean;
  history: string;
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  category: string;
  muscleGroups: string[];
  estimatedMinutes: number;
  exercises: ExerciseItem[];
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
}

export interface SocialPost {
  id: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  roleTag: string;
  workoutType: string;
  timestamp: string;
  image: string;
  caption: string;
  likes: number;
  commentsCount: number;
  saved: boolean;
  userLiked: boolean;
  commentsList: Comment[];
  workoutStats?: {
    volumeTotal: string;
    duration: string;
    prRecord?: string;
  };
}

export interface ProgressDataPoint {
  period: string;
  benchPress: number;
  squat: number;
  deadlift: number;
  workoutsCount: number;
}

export interface ChallengeItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  duration: string;
  participants: number;
  progressPercent: number;
  joined: boolean;
  reward: string;
}

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  priceNote: string;
  features: string[];
  ctaText: string;
  targetAudience: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: 'Iniciante' | 'Intermediário' | 'Atleta' | 'Personal Trainer';
  avatar: string;
  comment: string;
  stats: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
