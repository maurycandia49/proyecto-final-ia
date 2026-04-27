import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: FaDribbble, label: 'Dribbble', url: 'https://dribbble.com' },
  ]

  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="border-t border-white/10 bg-dark/50">
      <div className="container-custom py-16">
        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Dev<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Building beautiful digital experiences with code and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-colors duration-300"
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <span>© {currentYear} Dev. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="text-sm text-gray-500 flex items-center gap-1">
            Made with <HiHeart className="text-red-500 animate-pulse" /> for developers
          </div>

          {/* Bottom Links */}
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-accent transition-colors duration-300">
              Privacy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors duration-300">
              Terms
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer
