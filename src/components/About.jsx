import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: FaCode, title: 'Código Limpio', text: 'Escribo código mantenible y escalable' },
    { icon: FaLaptopCode, title: 'Full Stack', text: 'Frontend y Backend especializado' },
    { icon: FaRocket, title: 'Innovación', text: 'Siempre aprendiendo nuevas tecnologías' }
  ];

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <section 
      id="about" 
      style={{
        padding: '100px 24px',
        backgroundColor: '#0f172a'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
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
              marginBottom: '40px',
              textAlign: 'center'
            }}
          >
            Sobre <span style={{ color: '#0ea5e9' }}>Mí</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ boxShadow: '0 0 40px rgba(14, 165, 233, 0.15)' }}
            style={{
              backgroundColor: 'rgba(2, 6, 23, 0.6)',
              borderRadius: '20px',
              padding: 'clamp(24px, 5vw, 40px)',
              border: '1px solid rgba(55, 65, 81, 0.5)',
              marginBottom: '32px'
            }}
          >
            <motion.p 
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#d1d5db', marginBottom: '20px', lineHeight: '1.8' }}
            >
              Soy un desarrollador Full Stack apasionado por crear aplicaciones web modernas y funcionales. 
              Me especializo en construir soluciones eficientes utilizando las últimas tecnologías del mercado.
            </motion.p>
            
            <motion.p 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#d1d5db', marginBottom: '20px', lineHeight: '1.8' }}
            >
              Con experiencia en desarrollo frontend y backend, me enfoco en escribir código limpio, 
              mantener las mejores prácticas y crear interfaces de usuario intuitivas que ofrezcan 
              experiencias excepcionales.
            </motion.p>
            
            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#d1d5db', lineHeight: '1.8' }}
            >
              Siempre estoy aprendiendo nuevas tecnologías y buscando desafíos que me permitan 
              crecer como profesional y aportar valor a cada proyecto en el que participo.
            </motion.p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    backgroundColor: 'rgba(2, 6, 23, 0.4)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(55, 65, 81, 0.3)',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    style={{ marginBottom: '12px' }}
                  >
                    <IconComponent style={{ fontSize: '2rem', color: '#0ea5e9' }} />
                  </motion.div>
                  <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '6px', fontSize: '1rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
