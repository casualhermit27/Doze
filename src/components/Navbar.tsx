'use client'

import { motion } from 'framer-motion'
import { Menu, X, Smartphone, Download, Play } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 sm:h-20 w-full">
        {/* Desktop Layout - Three Section Layout */}
        <div className="hidden lg:flex items-center w-full">
          {/* Left - Logo */}
          <div className="flex-1 flex justify-start">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-black"
            >
              Doze
            </motion.span>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-8">
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                href="#features"
                className="text-black hover:text-gray-800 transition-colors duration-300 font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Features
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                href="#pricing"
                className="text-black hover:text-gray-800 transition-colors duration-300 font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Pricing
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="#about"
                className="text-black hover:text-gray-800 transition-colors duration-300 font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                About
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="#contact"
                className="text-black hover:text-gray-800 transition-colors duration-300 font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Right - CTA Button */}
          <div className="flex-1 flex justify-end">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -2 }}
              className="flex items-center space-x-2 px-6 py-3 text-black font-semibold bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Free</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between w-full max-w-full">
          {/* Mobile Logo */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-black"
          >
            Doze
          </motion.span>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={toggleMenu}
            className="p-2 sm:p-3 rounded-xl hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 transition-colors duration-300 z-50"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/20 backdrop-blur-3xl border border-white/40 mt-2 sm:mt-4 rounded-xl shadow-lg mx-4 sm:mx-0 absolute top-full left-0 right-0 z-40"
        >
          <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 space-y-4 sm:space-y-6">
            {/* Navigation Links */}
            <div className="space-y-2 sm:space-y-3">
              <a
                href="#features"
                className="block text-base sm:text-lg font-medium text-black hover:text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-base sm:text-lg font-medium text-black hover:text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block text-base sm:text-lg font-medium text-black hover:text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-base sm:text-lg font-medium text-black hover:text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/30 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
            
            {/* CTA Button */}
            <div className="pt-3 sm:pt-4">
              <button className="flex items-center justify-center space-x-2 w-full px-4 sm:px-6 py-3 sm:py-4 text-black font-semibold bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download Free</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
