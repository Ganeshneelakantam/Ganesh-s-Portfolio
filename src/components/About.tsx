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
              I’m a dedicated Computer Science graduate with a deep passion for full-stack development, 
              machine learning, and data analytics. I love crafting scalable, user-centric solutions that 
              tackle real-world challenges and make a difference.
            </p>
            <p>
              Through diverse virtual internships and active contributions to open-source projects on GitHub, 
              I’ve honed my skills while exploring cutting-edge technologies. My journey is driven by a desire 
              to harness AI and modern development practices to build innovative, impactful software.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Education & Experience</h3>
            
            <div className="mt-8">
              <TimelineItem
                year="June 2024 - Present"
                title="Java Full Stack Internship (KodNest)"
                description="Trained in Java, Python, SQL, and frameworks like Spring Boot and Django. Gained experience in testing with Selenium and project management with Jira."
              />
              <TimelineItem
                year="2020 - 2024"
                title="B.Tech in Computer Science and Engineering"
                description="Usha Rama College of Engineering and Technology, Telaprolu. Graduated with a CGPA of 8.31 (75.63%), mastering algorithms, software engineering, and emerging technologies."
              />
              <TimelineItem
                year="Nov 2023 - Apr 2024"
                title="Data Science Virtual Internship (APSCHE & 360DigiTMG)"
                description="Performed exploratory data analysis, built regression models, and visualized insights using Python and SQL."
              />
              <TimelineItem
                year="Mar 2022 - May 2022"
                title="AI-ML Virtual Internship (AICTE & AWS Academy)"
                description="Applied machine learning techniques such as classification and clustering to solve practical problems."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
