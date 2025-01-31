import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center text-center md:text-left"
        >
          {/* Profile Image (Rectangle) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
            // className="w-56 h-64 md:w-64 md:h-72 overflow-hidden border-4 border-purple-500 shadow-lg"
          >
            <img
              src="https://res.cloudinary.com/dgja3lpzu/image/upload/v1717340043/Personal/profile-removebg_zezjsh_3_ilded7-removebg-preview_p9ug5a.png" // Replace with your actual image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name and Info */}
          <div className="md:ml-8 mt-6 md:mt-0">
            {/* Animated Name */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {Array.from("Siva Naga Sai Ganesh Neelakantam").map(
                (letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {letter}
                  </motion.span>
                )
              )}
            </motion.h1>

            {/* Type Animation */}
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Developer",
                  2000,
                  "AI & Data-Driven Solutions",
                  2000,
                  "Data Analytics",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center md:justify-start space-x-6"
            >
              <a
                href="https://github.com/Ganeshneelakantam"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/sive-naga-sai-ganesh-neelakantam-67bb2a235"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#contact"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-8 h-8 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>

            {/* Learn More Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-12 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 
              transition-colors duration-300 transform hover:scale-105"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
