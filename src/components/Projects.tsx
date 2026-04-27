import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Plataforma de Comercio Electrónico',
      description: 'Solución completa de comercio electrónico con frontend React, backend Node.js e integración de Stripe.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      live: '#',
      code: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Panel de Estadísticas',
      description: 'Panel de análisis en tiempo real con visualización de datos y gestión de usuarios.',
      tags: ['React', 'Chart.js', 'PostgreSQL', 'Express'],
      image: '📊',
      live: '#',
      code: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Campaña de Redes Sociales',
      description: 'Campaña integrada de marketing digital que resultó en un aumento del ROI del 300%.',
      tags: ['SEO', 'SEM', 'Content Marketing', 'Analytics'],
      image: '📱',
      live: '#',
      code: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Aplicación de Gestión de Tareas',
      description: 'Aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '✅',
      live: '#',
      code: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Generador de Contenidos AI',
      description: 'Herramienta de generación de contenidos impulsada por IA para profesionales de marketing.',
      tags: ['Next.js', 'Python', 'OpenAI API', 'PostgreSQL'],
      image: '🤖',
      live: '#',
      code: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Optimización de Marca',
      description: 'Proyecto integral de estrategia de marca y optimización de sitio web.',
      tags: ['UX/UI', 'Branding', 'Optimization', 'Marketing'],
      image: '🎨',
      live: '#',
      code: '#',
      featured: false,
    },
  ]

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section bg-dark/50">
      <div className="container-custom">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-gradient"
        >
          Proyectos Destacados
        </motion.h2>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:glow-accent"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center text-6xl overflow-hidden relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-dark transition-colors duration-300"
                  >
                    <HiExternalLink /> En Vivo
                  </a>
                  <a
                    href={project.code}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-colors duration-300"
                  >
                    <HiCode /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Otros Proyectos</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {others.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-xl transition-all duration-300 hover:glow-accent group cursor-pointer"
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Ver Todos los Proyectos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
