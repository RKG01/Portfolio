import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            Made with
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            &
            <Code2 className="w-4 h-4 text-primary" />
            by
            <span className="font-heading font-semibold text-gradient">
              Rahul Gupta
            </span>
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
