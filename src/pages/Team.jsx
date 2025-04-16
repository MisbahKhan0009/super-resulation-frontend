import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Team() {
  const team = [
    {
      name: "Md. Abdula Al Shyed",
      id: "2212592042",
      role: "Team Member",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=MAS"
    },
    {
      name: "Rakibul Islam",
      id: "2212058642",
      role: "Team Member",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=RI"
    },
    {
      name: "Md. Misbah Khan",
      id: "2132089642",
      role: "Team Member",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=MMK"
    },
    {
      name: "Raju Ahamed Rabby",
      id: "2013823642",
      role: "Team Member",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=RAR"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Department of Computer Science and Engineering<br />
          North South University
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="p-6 rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full bg-gray-100"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.id}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                      <FaGithub />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Team;