export interface Course {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  image: string;
  rating: number;
  featured?: boolean;
  description?: string;
  category: string; // Added for filtering
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Career Foundation Course",
    level: "Beginner",
    price: "5,000 ₹",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop", 
    rating: 4.8,
    featured: true,
    description: "Start your tech journey with a solid foundation. Learn the basics of programming, algorithmic thinking, and career planning to set yourself up for success in the IT industry.",
    category: "Career"
  },
  {
    id: "2",
    title: "Front-End Developer Course",
    level: "Intermediate",
    price: "45,000 ₹",
    image: "/images/image2.png", 
    rating: 4.9,
    description: "Master Modern Front-End Development. Dive deep into HTML5, CSS3, JavaScript, and React.js to build stunning, responsive user interfaces.",
    category: "Web Development"
  },
  {
    id: "3",
    title: "Back-End Developer Course",
    level: "Intermediate",
    price: "50,000 ₹",
    image: "/images/image 1.avif", 
    rating: 4.7,
    description: "Become a backend expert. Learn server-side programming, database management, API development, and system architecture using Node.js and SQL/NoSQL databases.",
    category: "Web Development"
  },
  {
    id: "4",
    title: "Full Stack Developer Course",
    level: "Advanced",
    price: "85,000 ₹",
    image: "/images/image-3.png", 
    rating: 4.9,
    featured: true,
    description: "The complete package. Master both Front-End and Back-End technologies to become a versatile Full Stack Developer capable of building end-to-end applications.",
    category: "Web Development"
  },
  {
    id: "5",
    title: "Freelance Master Class",
    level: "Intermediate",
    price: "25,000 ₹",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", 
    rating: 4.8,
    description: "Learn how to find high-paying clients, manage projects, and build a successful freelance career in tech. Covering platforms like Upwork, Fiverr, and direct sales.",
    category: "Business"
  },
  {
    id: "6",
    title: "Entrepreneur Course",
    level: "Advanced",
    price: "70,000 ₹",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", 
    rating: 4.9,
    description: "Turn your ideas into reality. Learn startup fundamentals, product management, scaling, and how to build a tech business from scratch.",
    category: "Business"
  },
  {
    id: "7",
    title: "Aspiring Engineers Program",
    level: "Beginner",
    price: "40,000 ₹",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop", 
    rating: 4.7,
    description: "A comprehensive program designed for students and fresh graduates to bridge the gap between academic theory and practical engineering skills.",
    category: "Career"
  },
  {
    id: "8",
    title: "Digital Marketing Mastery",
    level: "Beginner",
    price: "30,000 ₹",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop", 
    rating: 4.6,
    description: "Master SEO, SEM, Social Media Marketing, and Content Strategy to grow any business online. Essential skills for the modern digital economy.",
    category: "Marketing"
  },
  {
    id: "9",
    title: "DevOps Engineering",
    level: "Advanced",
    price: "60,000 ₹",
    image: "/images/image.jpg",
    rating: 4.8,
    description: "Bridge the gap between development and operations. Learn CI/CD pipelines, containerization (Docker, Kubernetes), and cloud infrastructure management.",
    category: "DevOps"
  },
  {
    id: "10",
    title: "Mobile App Development",
    level: "Intermediate",
    price: "55,000 ₹",
    image: "/images/image-4.png",
    rating: 4.8,
    description: "Build native iOS and Android apps using Flutter and React Native. Learn state management, API integration, and app store deployment.",
    category: "Mobile App"
  },
  {
    id: "11",
    title: "UI/UX Design Fundamentals",
    level: "Beginner",
    price: "35,000 ₹",
    image: "/images/IMAGE5.avif",
    rating: 4.9,
    description: "Master the art of user interface and experience design. Learn Figma, prototyping, user research, and design systems.",
    category: "UI/UX Design"
  },
  {
    id: "12",
    title: "Data Science Bootcamp",
    level: "Advanced",
    price: "75,000 ₹",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    description: "Unlock the power of data. Learn Python, Machine Learning, Data Visualization, and Statistical Analysis to drive business decisions.",
    category: "Data Science"
  }
];
