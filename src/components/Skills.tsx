import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Desarrollo Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Redux'],
    },
    {
      category: 'Desarrollo Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Marketing Digital',
      skills: ['SEO', 'SEM', 'Social Media', 'Analytics', 'Content Strategy', 'Email Marketing'],
    },
    {
      category: 'Herramientas y Plataformas',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Google Analytics', 'CI/CD'],
    },
  ]

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-gradient"
        >
          Habilidades y Experiencia
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-accent">{category.category}</h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/50 rounded-lg text-sm font-semibold text-gray-200 cursor-pointer transition-all duration-300 hover:border-accent glow-accent"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 glass-effect p-12 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-accent">Nivel de Competencia</h3>
          
          <div className="space-y-8">
            {[
              { name: 'Desarrollo Web', level: 95 },
              { name: 'Marketing Digital', level: 90 },
              { name: 'Diseño UI/UX', level: 85 },
              { name: 'Análisis de Datos', level: 80 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-accent to-blue-500 rounded-full"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
