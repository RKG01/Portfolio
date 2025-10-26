import { motion } from "framer-motion";
import { ExternalLink, Code2, Trophy, Target } from "lucide-react";
import { Button } from "./ui/button";

const profiles = [
  {
    name: "LeetCode",
    description: "Sharpening my problem-solving daily",
    icon: Code2,
    stats: "800+ Problems Solved",
    color: "from-orange-500 to-yellow-500",
    link: "https://leetcode.com/u/Rahul_gupta_001/",
  },
  {
    name: "Codeforces",
    description: "Competitive programming excellence",
    icon: Trophy,
    stats: "Pupil • 1300+ Rating",
    color: "from-blue-500 to-cyan-500",
    link: "https://codeforces.com/profile/Rahulgupta_ryuk",
  },
  {
    name: "CodeChef",
    description: "Contest-driven growth mindset",
    icon: Target,
    stats: "3★ • 1700+ Rating",
    color: "from-purple-500 to-pink-500",
    link: "https://www.codechef.com/users/rk5849193",
  },
];

const CodingProfiles = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-secondary mb-4">
            My Coding Universe
          </h2>
          <p className="text-muted-foreground text-lg">
            Where algorithms meet passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 border-2 border-white/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <profile.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-center mb-2 group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>
                
                <p className="text-muted-foreground text-center mb-4 text-sm">
                  {profile.description}
                </p>

                <div className="mb-6 text-center">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${profile.color} text-white text-sm font-semibold`}>
                    {profile.stats}
                  </div>
                </div>

                {/* Button */}
                <Button
                  className="w-full group/btn bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  asChild
                >
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${profile.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
