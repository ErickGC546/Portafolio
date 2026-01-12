import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactLinks = [
    {
      name: 'Email',
      value: 'erickgalindo206@gmail.com',
      href: 'mailto:erickgalindo206@gmail.com',
      icon: FaEnvelope,
      color: '#EA4335',
      bgColor: 'rgba(234, 67, 53, 0.1)'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/erick-galindo',
      href: 'https://www.linkedin.com/in/erick-galindo',
      icon: FaLinkedin,
      color: '#0A66C2',
      bgColor: 'rgba(10, 102, 194, 0.1)'
    },
    {
      name: 'GitHub',
      value: 'github.com/ErickGC546',
      href: 'https://github.com/ErickGC546',
      icon: FaGithub,
      color: '#ffffff',
      bgColor: 'rgba(255, 255, 255, 0.1)'
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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 12 } 
    }
  };

  return (
    <section 
      id="contact" 
      style={{
        padding: '100px 24px',
        backgroundColor: '#020617'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{ textAlign: 'center', marginBottom: '16px' }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 15, -15, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              style={{ display: 'inline-block', fontSize: '3rem' }}
            >
              <FaPaperPlane style={{ color: '#0ea5e9' }} />
            </motion.span>
          </motion.div>

          <h2 
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Trabajemos <span style={{ color: '#0ea5e9' }}>Juntos</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1rem',
              color: '#9ca3af',
              textAlign: 'center',
              marginBottom: '48px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.7'
            }}
          >
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}
          >
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              const isHovered = hoveredIndex === index;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor: isHovered ? link.bgColor : 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '20px',
                    padding: '36px 24px',
                    border: isHovered ? `2px solid ${link.color}` : '1px solid rgba(55, 65, 81, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s, border 0.3s'
                  }}
                >
                  <motion.div 
                    animate={isHovered ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      fontSize: '3rem', 
                      color: isHovered ? link.color : '#9ca3af',
                      transition: 'color 0.3s'
                    }}
                  >
                    <IconComponent />
                  </motion.div>
                  <div>
                    <motion.h3 
                      animate={isHovered ? { color: link.color } : { color: 'white' }}
                      style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}
                    >
                      {link.name}
                    </motion.h3>
                    <p style={{ color: '#9ca3af', fontSize: '0.85rem', wordBreak: 'break-word' }}>
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
