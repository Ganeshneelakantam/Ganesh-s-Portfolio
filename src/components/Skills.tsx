import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML/CSS', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'Flask', level: 80 },
      { name: 'Spring Boot', level: 78 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'VS Code', level: 90 },
      { name: 'Eclipse', level: 82 },
      { name: 'Spring Tool Suite', level: 80 },
    ],
  },
];

const SkillBar = ({ skill, inView }: { skill: Skill; inView: boolean }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="bg-purple-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-600">{category.title}</h3>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} inView={inView} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;