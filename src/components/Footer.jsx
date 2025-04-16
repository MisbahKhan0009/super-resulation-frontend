import { FaEnvelope, FaUniversity } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Project</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Machine Learning based Super Resolution Model Aimed At Restoring The Images Using XGBoost.
              CSE445, Section 3 – Project Group No. 4
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
              <FaEnvelope />
              <span>cse445.group4@northsouth.edu</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaUniversity />
              <span>North South University</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Super-Resolution',
                'XGBoost',
                'Image Patches',
                'Machine Learning',
                'Patch Reconstruction'
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 text-center text-gray-600 dark:text-gray-400">
          <p>Department of Computer Science and Engineering</p>
          <p>North South University</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;