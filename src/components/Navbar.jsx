import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const NAVBAR_HEIGHT = 80;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const performScroll = () => {
      const top = element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if (isOpen) {
      setIsOpen(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(performScroll);
      });
      return;
    }

    performScroll();
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer'
            }}
          >
            {'<EG Dev/>'}
          </motion.div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '40px' }} className="desktop-menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#d1d5db',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#0ea5e9'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#d1d5db',
              fontSize: '1.5rem',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              padding: 0,
              lineHeight: 1
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        style={{
          backgroundColor: 'rgba(2, 6, 23, 0.98)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden'
        }}
        className="mobile-menu"
      >
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#d1d5db',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '8px 0'
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
