import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiPython, 
  SiCplusplus,
  SiPrisma,
  SiPostgresql,
  SiJavascript,
  SiTypescript
} from "react-icons/si";
import { Sparkles, Brain, Bot, Network } from "lucide-react";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

const TechStack = () => {
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Technologies I Love
          </h2>
          <p className="text-muted-foreground text-lg">
            Building with modern tools and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-hover rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group"
            >
              <div className="relative">
                <tech.icon 
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: tech.color }}
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2 
                  }}
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-center">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional tech highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="glass-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">Gemini API</h3>
              <p className="text-muted-foreground text-sm">AI-powered integrations</p>
            </div>
          </div>
          
          <div className="glass-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">Auth0</h3>
              <p className="text-muted-foreground text-sm">Secure authentication</p>
            </div>
          </div>

          <div className="glass-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-xl">
              <Bot className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">LangChain</h3>
              <p className="text-muted-foreground text-sm">AI application framework</p>
            </div>
          </div>

          <div className="glass-hover rounded-2xl p-6 flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">LangGraph</h3>
              <p className="text-muted-foreground text-sm">AI agent workflows</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
