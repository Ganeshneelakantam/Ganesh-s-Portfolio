import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Django', 'Spring Boot', 'Thymeleaf', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Oracle', 'PostgreSQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'VS Code', 'Eclipse', 'Spring Tool Suite', 'Selenium', 'Jira', 'Trello'],
  },
  {
    title: 'Machine Learning & Data Science',
    skills: ['scikit-learn', 'TensorFlow', 'Keras', 'pandas', 'NumPy', 'EDA', 'Data Visualization'],
  },
];

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => (
  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 text-purple-600">{category.title}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <SkillCategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
