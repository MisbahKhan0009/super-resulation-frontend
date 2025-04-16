import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaLaptopCode, FaDatabase, FaTools, FaChartBar } from 'react-icons/fa';

function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About Our Project</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Abstract</h2>
            <p className="text-gray-600 dark:text-gray-400">
              This paper proposes a patch-based image super-resolution method using XGBoost, targeting
              efficient image enhancement without the computational cost of deep neural networks. We
              utilize a mapping model trained on corresponding low-resolution (LR) and high-resolution
              (HR) image patches. Our method offers promising performance on small datasets, proving
              to be a lightweight, interpretable, and fast solution for edge devices or educational purposes.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Introduction</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Image super-resolution is a critical task in computer vision, involving the reconstruction
            of high-resolution images from low-resolution counterparts. While deep learning models like
            SRCNN, EDSR, and ESRGAN have recently gained popularity, they are computationally expensive.
            This work explores an alternative method using XGBoost, a gradient boosting algorithm
            known for its efficiency and performance on structured data.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Dataset and Preprocessing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <FaDatabase className="text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Collection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                100 high-resolution images from Unsplash and Pexels
                Each image resized to 256×256 pixels
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <FaTools className="text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Patch Extraction</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Non-overlapping 16×16 patches
                ~25,600 patch pairs for training
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Model Training</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-8">
            <FaChartBar className="text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">XGBoost Parameters</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Estimators: 200</li>
              <li>Learning Rate: 0.05</li>
              <li>Max Depth: 8</li>
              <li>Tree Method: GPU Histogram ('hist')</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Results and Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            {[
              {
                icon: <FaChartLine className="text-3xl mb-4" />,
                title: "Performance",
                description: "Comparable to CNN-based techniques on small datasets"
              },
              {
                icon: <FaCode className="text-3xl mb-4" />,
                title: "Resource Usage",
                description: "No need for large GPU resources"
              },
              {
                icon: <FaLaptopCode className="text-3xl mb-4" />,
                title: "Processing Speed",
                description: "Fast training and inference"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Future Work</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-8">
            <li>Overlapping patch strategy</li>
            <li>Combining with CNN post-processing</li>
            <li>Training on larger and more diverse datasets</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default About;