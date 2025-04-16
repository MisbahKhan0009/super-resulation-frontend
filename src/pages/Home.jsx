import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaBolt, FaMagic, FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center py-20"
      >
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Transform Your Images with AI
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Experience the power of XGBoost-driven super-resolution technology.
          Turn your low-resolution images into crystal-clear masterpieces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Try Demo <FaArrowRight />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {[
          {
            icon: <FaRocket className="text-4xl mb-4" />,
            title: "High Quality",
            description: "Get stunning high-resolution results with our advanced algorithm"
          },
          {
            icon: <FaBolt className="text-4xl mb-4" />,
            title: "Fast Processing",
            description: "Quick and efficient enhancement using XGBoost technology"
          },
          {
            icon: <FaMagic className="text-4xl mb-4" />,
            title: "Easy to Use",
            description: "Simple drag and drop interface for instant results"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.2 }}
            className="border border-black/10 dark:border-white/10 rounded-lg p-8 text-center hover:border-black/30 dark:hover:border-white/30 transition-colors"
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="py-20 bg-gray-50 dark:bg-gray-900 -mx-4 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaChartLine className="text-3xl mb-4" />,
                title: "Advanced Algorithm",
                description: "Utilizes XGBoost for efficient image enhancement"
              },
              {
                icon: <FaCode className="text-3xl mb-4" />,
                title: "Lightweight Solution",
                description: "Perfect for edge devices and quick deployment"
              },
              {
                icon: <FaLaptopCode className="text-3xl mb-4" />,
                title: "Developer Friendly",
                description: "Easy integration with existing systems"
              },
              {
                icon: <FaMagic className="text-3xl mb-4" />,
                title: "Smart Processing",
                description: "Intelligent patch-based reconstruction"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;