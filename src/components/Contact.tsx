import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Correo Electrónico',
      value: 'maurycandia49@gmail.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: HiPhone,
      label: 'Teléfono',
      value: '+54 9 11 57569391',
      link: 'tel:+5491157569391',
    },
    {
      icon: HiLocationMarker,
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      link: '#',
    },
  ]

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
    <section id="contact" className="section">
      <div className="container-custom">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-gradient"
        >
          Ponte en Contacto
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.link}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 rounded-xl text-center hover:glow-accent transition-all duration-300"
              >
                <Icon className="text-4xl text-accent mx-auto mb-4" />
                <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                <p className="text-xl font-semibold">{info.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form and Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="Tu nombre"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium mb-2">Dirección de Correo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="tu@email.com"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <label className="block text-sm font-medium mb-2">Asunto</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 text-white placeholder-gray-500"
                placeholder="¿De qué trata?"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex-1 btn-primary"
              >
                {isSubmitted ? '✓ ¡Mensaje Enviado!' : 'Enviar Mensaje'}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                ¡Gracias por tu mensaje! Me pondrá en contacto pronto.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
