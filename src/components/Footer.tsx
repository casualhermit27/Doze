'use client'

import { motion } from 'framer-motion'
import { Smartphone, Mail, Twitter, Instagram, Github, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#E9E3DF] text-gray-900 relative">
      {/* Orange spotlight at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Doze</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              The simplest way to recharge with a perfect nap. 
              Wake up refreshed, every time.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-8 text-gray-900">Product</h4>
            <ul className="space-y-6">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Download</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Changelog</a></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-8 text-gray-900">Support</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for better naps</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-500">© 2024 Doze. All rights reserved.</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <ArrowUp className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
