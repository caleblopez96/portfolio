import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <p className="text-center py-8 font-mono">Copyright 2025 Caleb Lopez</p>
    </motion.footer>
  )
}

export default Footer