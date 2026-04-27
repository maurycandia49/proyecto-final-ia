import { motion } from 'framer-motion'
import { HiCode, HiSparkles, HiTrendingUp } from 'react-icons/hi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '5+' },
  ]

  const highlights = [
    {
      icon: HiCode,
      title: 'Full Stack Development',
      description: 'Building robust web applications with React, Node.js, and modern tech stacks.',
    },
    {
      icon: HiTrendingUp,
      title: 'Digital Marketing',
      description: 'Crafting data-driven strategies for SEO, social media, and content marketing.',
    },
    {
      icon: HiSparkles,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    },
  ]

  return (
    <section id="about" className="section bg-dark/50">
      <div className="container-custom">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-gradient"
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-6">
              I'm a passionate Full Stack Developer and Digital Marketing specialist with a proven track record of building high-performance web applications and developing successful digital marketing strategies. My expertise spans both technical development and strategic marketing.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-6">
              With 5+ years of experience, I've helped startups and established companies achieve their digital goals through innovative solutions and data-driven approaches.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
              When I'm not coding or strategizing, you'll find me exploring new technologies, contributing to open-source projects, or writing about web development trends.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Placeholder - can be replaced with actual image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glow-accent rounded-xl overflow-hidden h-96 glass-effect flex items-center justify-center"
          >
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">👨‍💻</div>
              <p>Profile Image</p>
              <p className="text-sm mt-2">(Replace with actual image)</p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl hover:glow-accent transition-all duration-300"
              >
                <Icon className="text-4xl text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
