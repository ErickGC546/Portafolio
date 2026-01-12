import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiRedux
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Express', icon: SiExpress, color: '#ffffff' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 } 
    }
  };

  return (
    <section 
      id="skills" 
      style={{
        padding: '100px 24px',
        backgroundColor: '#020617'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '48px',
              textAlign: 'center'
            }}
          >
            Mis <span style={{ color: '#0ea5e9' }}>Habilidades</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px'
            }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor: isHovered ? `${skill.color}15` : 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '16px',
                    padding: '28px 16px',
                    border: isHovered ? `2px solid ${skill.color}` : '1px solid rgba(55, 65, 81, 0.5)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    transition: 'background-color 0.3s, border 0.3s'
                  }}
                >
                  <motion.div 
                    animate={isHovered ? { 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '3rem', color: skill.color }}
                  >
                    <IconComponent />
                  </motion.div>
                  <motion.p 
                    animate={isHovered ? { color: skill.color } : { color: '#d1d5db' }}
                    style={{ fontWeight: '600', fontSize: '0.9rem', textAlign: 'center' }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
