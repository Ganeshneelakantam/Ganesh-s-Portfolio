import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-8 flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-purple-600 rounded-full" />
        <div className="w-0.5 h-full bg-purple-600" />
      </div>
      <div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <span className="text-purple-600 font-semibold">{year}</span>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          
          <div className="mb-12 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p className="mb-4">
              Driven professional with expertise in AI, full-stack development, and data analytics, 
              passionate about crafting innovative and scalable solutions.
            </p>
            <p>
              I specialize in building robust applications that solve real-world problems, 
              with a focus on user experience and performance optimization.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Education & Experience</h3>
            
            <div className="mt-8">
              <TimelineItem
                year="2020 - 2024"
                title="Bachelor's in Computer Science"
                description="Studied advanced computing concepts, algorithms, and software engineering principles."
              />
              <TimelineItem
                year="2023"
                title="Software Development Intern"
                description="Developed and maintained full-stack applications using modern technologies."
              />
              <TimelineItem
                year="2022"
                title="AI Research Assistant"
                description="Conducted research on machine learning algorithms and implemented solutions."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;