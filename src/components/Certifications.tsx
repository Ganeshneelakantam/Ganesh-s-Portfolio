import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  category?: string;
  highlight?: boolean;
}

const certifications: Certification[] = [
  {
    title: 'Introduction to Industry 4.0 and Industrial IoT',
    issuer: 'NPTEL',
    date: 'Jul - Oct 2022',
    credential: 'nptel.ac.in/noc',
    category: 'Technical Skills',
    highlight: true,
  },
  {
    title: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Arizona State University (Coursera)',
    date: 'Dec 2023',
    credential: 'coursera.org/verify/ABC123',
    category: 'AI & Machine Learning',
  },
  {
    title: 'React.js Certification',
    issuer: 'UpGrad',
    date: 'Oct 2023',
    credential: 'upgrade.com/cert/XYZ789',
    category: 'Web Development',
  },
  {
    title: 'Google UX Design Specialization',
    issuer: 'Coursera',
    date: 'Aug 2023',
    credential: 'coursera.org/verify/DEF456',
    category: 'Design',
  },
  {
    title: 'Data Visualization: Empowering Business Insights',
    issuer: 'Tata Forge',
    date: 'Jun 2023',
    credential: 'tataforge.com/cert/JKL012',
    category: 'Data Science',
  },
];

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px] flex flex-col"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4 flex-grow">
        <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 line-clamp-2">
            {certification.title}
            {certification.highlight && (
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            )}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
            {certification.issuer}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            {certification.date}
          </p>
          {/* {certification.credential && (
            <a
              href={`https://${certification.credential}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 text-sm mt-2 inline-block"
            >
              View Credential
            </a>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CertificationCard certification={certification} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
