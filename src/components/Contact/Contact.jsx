import { useState } from 'react'
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex justify-center py-8">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} id='form' className="space-y-6">

          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-900 dark:text-gray-100">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-900 dark:text-gray-100">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-900 dark:text-gray-100">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 text-black"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 focus:ring-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
