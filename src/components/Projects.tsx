import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X } from 'lucide-react';

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
    title: 'Modern To-Do App',
    description: 'A feature-rich todo application with real-time updates, drag-and-drop functionality, and dark mode support.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Modern-To-Do-App',
    demo: 'https://todo-app.demo.com',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'K-Fold Numeric Dataset Validator',
    description: 'Machine learning tool for dataset validation using k-fold cross-validation technique.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/K-Fold-Numeric-Dataset-Validator',
    techStack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
  },
  {
    title: 'Calculator App',
    description: 'A beautiful and functional calculator with advanced mathematical operations.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Calculator-App',
    demo: 'https://calculator.demo.com',
    techStack: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Stock Market Prediction (LSTM)',
    description: 'Deep learning model for stock market prediction using LSTM neural networks.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Stock-Market-Prediction-LSMT-',
    techStack: ['Python', 'TensorFlow', 'Keras', 'pandas'],
  },
  {
    title: 'Student Management System',
    description: 'Comprehensive system for managing student data, courses, and grades.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com/Ganeshneelakantam/Student-Management-System',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Demo
            </a>
          )}
        </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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