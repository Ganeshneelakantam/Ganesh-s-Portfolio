import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const certifications: Certification[] = [
  {
    title: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Coursera',
    date: 'December 2023',
    credential: 'coursera.org/verify/ABC123',
  },
  {
    title: 'React.js',
    issuer: 'Upgrade',
    date: 'October 2023',
    credential: 'upgrade.com/cert/XYZ789',
  },
  {
    title: 'Google UX Design Specialization',
    issuer: 'Coursera',
    date: 'August 2023',
    credential: 'coursera.org/verify/DEF456',
  },
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'July 2023',
    credential: 'hackerrank.com/certificates/GHI789',
  },
  {
    title: 'Data Visualization',
    issuer: 'Tata Forge',
    date: 'June 2023',
    credential: 'tataforge.com/cert/JKL012',
  },
];

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-start">
        <Award className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{certification.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-1">{certification.issuer}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{certification.date}</p>
          {certification.credential && (
            <a
              href={`https://${certification.credential}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 text-sm mt-2 inline-block"
            >
              View Credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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