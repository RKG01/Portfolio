import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "AI Form Generator",
    description: "An AI-powered platform that dynamically generates intelligent web forms based on user prompts using Gemini.",
    icon: Sparkles,
    technologies: ["Next.js", "MongoDB", "Gemini API", "Tailwind CSS"],
    liveLink: "https://form-generator-ashy.vercel.app/",
    codeLink: "https://github.com/RKG01/FormGenerator",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Learning Platform",
    description: "A personalized AI-driven learning platform that adapts to each student's journey, gamified with streaks and rewards.",
    icon: GraduationCap,
    technologies: ["React", "MongoDB", "Gemini API", "Auth0"],
    liveLink: "https://ai-learning-platform-qmwh-lodfhxur5.vercel.app/",
    codeLink: "https://github.com/RKG01/AI_LEARNING_PLATFORM",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "TechTales Blog",
    description: "A developer-focused blog platform where coders share tech stories, insights, and tutorials.",
    icon: BookOpen,
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    liveLink: "https://tech-tales-three.vercel.app/",
    codeLink: "https://github.com/RKG01/Tech-Tales",
    gradient: "from-green-500 to-emerald-500",
  },
];

const Projects = () => {
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Building the future, one project at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-6 border-2 border-white/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="bg-white/5 hover:bg-white/10 border-white/10 hover:border-primary/50"
                      size="icon"
                      asChild
                    >
                      <a 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7,
                  }}
                  className={`absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
