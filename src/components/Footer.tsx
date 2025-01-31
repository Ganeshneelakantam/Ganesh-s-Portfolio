import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Siva Naga Sai Ganesh Neelakantam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;