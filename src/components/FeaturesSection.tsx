'use client'

import { motion } from 'framer-motion'
import { Clock, Volume2, Wifi, Headphones, BarChart3, ArrowRight } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "One-Tap Presets",
      description: "Perfect nap times backed by science - 15, 25, or 45 minutes"
    },
    {
      icon: Volume2,
      title: "Gentle Wake-Up",
      description: "Natural sounds instead of jarring alarms - birds, chimes, or soft tones"
    },
    {
      icon: Wifi,
      title: "Offline Ready",
      description: "No internet needed, perfect for travel and anywhere"
    },
    {
      icon: Headphones,
      title: "Soundscapes",
      description: "Optional rain, breeze, or silence while you nap"
    }
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pick your nap length → Close your eyes → Wake up gently refreshed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl p-6 h-full hover:bg-white/30 transition-all duration-300 group-hover:border-white/60">
                <motion.div 
                  className="w-16 h-16 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-8 py-4 text-base font-semibold text-black bg-yellow-300 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300"
          >
            Start Napping
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
