import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  };

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #020617, #0f172a)',
        padding: '100px 24px 60px 24px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          animate="visible"
        >
          <motion.p
            custom={0}
            variants={textVariants}
            style={{
              fontSize: '1rem',
              color: '#0ea5e9',
              marginBottom: '16px',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}
          >
            Bienvenido a mi portafolio
          </motion.p>
          
          <motion.h1 
            custom={1}
            variants={textVariants}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(to right, #60a5fa, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Erick Dev
          </motion.h1>
          
          <motion.p 
            custom={2}
            variants={textVariants}
            style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', color: '#d1d5db', marginBottom: '16px', fontWeight: '300' }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.p 
            custom={3}
            variants={textVariants}
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#9ca3af', maxWidth: '550px', margin: '0 auto 40px auto', lineHeight: '1.7', padding: '0 16px' }}
          >
            Construyendo experiencias web modernas con código limpio y soluciones innovadoras
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            animate={floatingAnimation}
            style={{
              padding: '16px 32px',
              backgroundColor: '#0ea5e9',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
            }}
          >
            Ver Proyectos
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#0ea5e9',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '1rem',
              border: '2px solid #0ea5e9',
              cursor: 'pointer'
            }}
          >
            Contactar
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}
        >
          {[
            { icon: FaGithub, href: 'https://github.com/ErickGC546', color: '#ffffff' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/erick-galindo', color: '#0A66C2' },
            { icon: FaEnvelope, href: 'mailto:erickgalindo206@gmail.com', color: '#EA4335' }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -5, color: social.color }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -5, 0],
                transition: { delay: i * 0.2, duration: 2, repeat: Infinity }
              }}
              style={{ color: '#9ca3af', fontSize: '1.75rem' }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          color: '#6b7280'
        }}
      >
        <FaChevronDown style={{ fontSize: '1.5rem' }} />
      </motion.div>
    </section>
  );
};

export default Hero;
