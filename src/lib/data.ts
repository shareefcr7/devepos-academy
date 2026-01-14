

export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  image: string;
  rating: number;
  featured?: boolean;
  description: string;
  category: string;
  duration?: string;
  access?: string;
}

export const courses: Course[] = [
  {
    id: "l0",
    title: "Entry Clarity Layer",
    level: "Beginner",
    price: "Free",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    featured: true,
    description: "Entry Clarity Layer is designed to help you understand whether this career path is right for you. Through short sessions, basic exposure, and simple challenges, you gain clarity and confidence without any commitment. This level focuses on removing confusion and giving you a clear starting direction. After completing this layer, you’ll know your next step with confidence.",
    category: "Entry Level",
    duration: "90 minutes to 3 days"
  },
  {
    id: "l1",
    title: "Foundation Layer",
    level: "Beginner",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    description: "Foundation Layer focuses on building strong fundamentals and learning discipline. You start from the basics and gradually develop confidence through structured learning and guided practice. This layer helps you understand core concepts clearly and follow professional learning habits. It prepares you for real execution in the next stage.",
    category: "Foundation",
    access: "Lifetime",
    featured: true
  },
  {
    id: "l2",
    title: "Execution Layer",
    level: "Intermediate",
    price: "₹20,000 + GST",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    description: "Execution Layer turns learning into real action. You work on practical tasks, challenges, and evaluations that focus on output instead of theory. This layer helps you gain hands-on experience and measurable skill growth. By the end, you’ll have real work to showcase and confidence in your abilities.",
    category: "Execution",
    access: "6 months",
    featured: true
  },
  {
    id: "l3",
    title: "Ecosystem Layer",
    level: "Advanced",
    price: "₹2,06,000 + GST",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
    description: "Ecosystem Layer is designed for top performers who want income, authority, and leadership growth. This level focuses on real responsibility, professional exposure, and long-term impact. You become part of a high-accountability system that supports consistent results. After completion, learners achieve real opportunities and sustained career growth.",
    category: "Ecosystem",
    access: "1 year",
    featured: true
  }
];
