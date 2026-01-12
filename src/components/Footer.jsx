import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#020617',
      borderTop: '1px solid rgba(55, 65, 81, 0.5)',
      padding: '24px 0'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Erick Galindo. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
