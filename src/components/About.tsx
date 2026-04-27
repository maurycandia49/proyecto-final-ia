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
    { label: 'Proyectos Completados', value: '50+' },
    { label: 'Clientes Felices', value: '30+' },
    { label: 'Años de Experiencia', value: '5+' },
  ]

  const highlights = [
    {
      icon: HiCode,
      title: 'Desarrollo Full Stack',
      description: 'Construyendo aplicaciones web robustas con React, Node.js y pilas tecnológicas modernas.',
    },
    {
      icon: HiTrendingUp,
      title: 'Marketing Digital',
      description: 'Diseñando estrategias basadas en datos para SEO, redes sociales y marketing de contenidos.',
    },
    {
      icon: HiSparkles,
      title: 'Diseño UI/UX',
      description: 'Creando interfaces hermosas e intuitivas que los usuarios aman interactuar.',
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
          Sobre Mí
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
              Soy un apasionado Desarrollador Full Stack y especialista en Marketing Digital con un historial comprobado de construcción de aplicaciones web de alto rendimiento y desarrollo de estrategias exitosas de marketing digital. Mi experiencia abarca tanto desarrollo técnico como marketing estratégico.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-6">
              Con más de 5 años de experiencia, he ayudado a startups y empresas establecidas a alcanzar sus objetivos digitales a través de soluciones innovadoras y enfoques basados en datos.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8">
              Cuando no estoy codificando o estrategizando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o escribiendo sobre tendencias de desarrollo web.
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
              <p>Imagen de Perfil</p>
              <p className="text-sm mt-2"><img src="../img/dev.png" alt="" /></p>
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
