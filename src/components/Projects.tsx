import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: 'Meal Mate',
    description: 'A full-featured food delivery app with restaurant management, secure payments, and order analytics.',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Meal_Mate', 
    techStack: ['Python', 'Django', 'SQLite', 'Razorpay API', 'email Integration'],
  },
  {
    title: 'Phone Directory',
    description: 'A sleek contact management app with add, view, and delete functionalities using React.',
    image: 'https://thumbs.dreamstime.com/b/telephone-directory-yellow-pages-yellow-page-business-connection-58568102.jpg',
    github: 'https://github.com/Ganeshneelakantam/phone-directory', 
    techStack: ['React', 'JavaScript', 'CSS', 'React Router'],
  },
  {
    title: 'Modern To-Do App',
    description: 'A feature-rich todo app with real-time updates, drag-and-drop, and dark mode.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Modern-To-Do-App',
    demo: 'https://taskmaster-to-do.netlify.app/',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'K-Fold Numeric Dataset Validator',
    description: 'ML tool for dataset validation using k-fold cross-validation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/K-Fold-Numeric-Dataset-Validator',
    techStack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
  },
  {
    title: 'Calculator App',
    description: 'A sleek calculator with advanced mathematical operations.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Calculator-App',
    techStack: ['Java', 'Springboot', 'Spring Tool Suit', 'HTML', 'CSS', 'Core Java'],
  },
  {
    title: 'Stock Market Prediction (LSTM)',
    description: 'Deep learning model for stock predictions using LSTM networks.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Stock-Market-Prediction-LSMT-',
    techStack: ['Python', 'TensorFlow', 'Keras', 'pandas'],
  },
  {
    title: 'Student Management System',
    description: 'System for managing student data, courses, and grades.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Student-Management-System',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      {/* Thumbnail Image */}
      <div className="relative w-full h-32 mb-4 rounded-md overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-md text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <Github className="w-4 h-4 mr-1" />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
