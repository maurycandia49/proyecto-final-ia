import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

interface NavbarProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

const Navbar = ({ activeNav, setActiveNav }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Sobre Mí', id: 'about' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveNav(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
        >
          MauriDev<span className="text-accent">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeNav === item.id ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
              {activeNav === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('contact')}
          className="hidden md:block btn-primary"
        >
          Ponte en Contacto
        </motion.button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-darker/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeNav === item.id
                    ? 'bg-accent/20 text-accent'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('contact')}
              className="w-full btn-primary mt-4"
            >
              Ponte en Contacto
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
