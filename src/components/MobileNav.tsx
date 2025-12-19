import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: '/bio', label: 'Bio' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/course', label: 'Course' },
    { path: '/contacts', label: 'Contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#F5F5F5] hover:text-[#B6B6B4] transition-colors z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {pages.map((page) => (
          <button
            key={page.path}
            onClick={() => navigate(page.path)}
            className={`text-sm tracking-widest uppercase transition-colors ${isActive(page.path)
                ? 'text-[#B6B6B4]'
                : 'text-[#F5F5F5] hover:text-[#B6B6B4]'
              }`}
          >
            {page.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#000100]/98 backdrop-blur-md z-40 md:hidden flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center space-y-10 px-6 w-full">
              {pages.map((page, index) => (
                <motion.button
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  className={`text-3xl tracking-widest uppercase transition-colors text-center ${isActive(page.path)
                      ? 'text-[#B6B6B4]'
                      : 'text-[#F5F5F5]'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {page.label}

                  {isActive(page.path) && (
                    <motion.div
                      className="h-0.5 bg-[#B6B6B4] mt-3 mx-auto"
                      layoutId="underline"
                      style={{ width: '60px' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
