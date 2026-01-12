import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDocker, FaStripe } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiChartdotjs, SiExpress, SiRedis, SiOpenai } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mapa de tecnologías con sus iconos y colores
  const techIcons = {
    'React': { icon: FaReact, color: '#61DAFB' },
    'Node.js': { icon: FaNodeJs, color: '#339933' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Stripe': { icon: FaStripe, color: '#635BFF' },
    'Next.js': { icon: SiNextdotjs, color: '#ffffff' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
    'Tailwind': { icon: SiTailwindcss, color: '#06B6D4' },
    'Chart.js': { icon: SiChartdotjs, color: '#FF6384' },
    'Express': { icon: SiExpress, color: '#ffffff' },
    'Redis': { icon: SiRedis, color: '#DC382D' },
    'Python': { icon: FaPython, color: '#3776AB' },
    'OpenAI': { icon: SiOpenai, color: '#412991' },
    'Docker': { icon: FaDocker, color: '#2496ED' },
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, autenticación y pasarela de pagos.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/tu-usuario/proyecto1',
      demo: 'https://proyecto1-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/tu-usuario/proyecto2',
      demo: 'https://proyecto2-demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard analítico para redes sociales con visualización de datos y métricas en tiempo real.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['React', 'Chart.js', 'Express', 'Redis'],
      github: 'https://github.com/tu-usuario/proyecto3',
      demo: 'https://proyecto3-demo.com',
    },
    {
      title: 'AI Chat Application',
      description: 'Aplicación de chat con inteligencia artificial, procesamiento de lenguaje natural y respuestas contextuales.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      technologies: ['React', 'Python', 'OpenAI', 'Docker'],
      github: 'https://github.com/tu-usuario/proyecto4',
      demo: 'https://proyecto4-demo.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3, type: 'spring', stiffness: 200 }
    })
  };

  return (
    <section 
      id="projects" 
      style={{
        padding: '100px 24px',
        backgroundColor: '#0f172a'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '48px',
              textAlign: 'center'
            }}
          >
            Mis <span style={{ color: '#0ea5e9' }}>Proyectos</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 0 30px rgba(14, 165, 233, 0.4), 0 20px 40px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(14, 165, 233, 0.6)'
                }}
                style={{
                  backgroundColor: 'rgba(2, 6, 23, 0.6)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(55, 65, 81, 0.5)',
                  transition: 'border-color 0.3s'
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, #020617 0%, transparent 100%)'
                  }}></div>
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#9ca3af', marginBottom: '16px', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.technologies.map((tech, techIndex) => {
                      const TechIcon = techIcons[tech]?.icon;
                      const techColor = techIcons[tech]?.color || '#0ea5e9';
                      return (
                        <motion.span
                          key={techIndex}
                          custom={techIndex}
                          variants={techVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          whileHover={{ scale: 1.1, y: -2 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 14px',
                            backgroundColor: `${techColor}15`,
                            color: techColor,
                            fontSize: '0.8rem',
                            borderRadius: '20px',
                            border: `1px solid ${techColor}40`,
                            cursor: 'default'
                          }}
                        >
                          {TechIcon && <TechIcon style={{ fontSize: '1rem' }} />}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(75, 85, 101, 1)' }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        backgroundColor: 'rgba(55, 65, 81, 0.8)',
                        color: 'white',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: '#0284c7' }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        backgroundColor: '#0ea5e9',
                        color: 'white',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        textDecoration: 'none'
                      }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
