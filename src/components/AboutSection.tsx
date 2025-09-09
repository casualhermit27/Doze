'use client'

import { motion } from 'framer-motion'
import { Users, Award, Globe, Heart, Moon, Zap, Shield, Coffee, GraduationCap, Plane, Briefcase, Clock, Volume2, Wifi } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { icon: Users, value: "50K+", label: "Nappers" },
    { icon: Award, value: "4.8★", label: "App Store" },
    { icon: Globe, value: "120+", label: "Countries" },
    { icon: Heart, value: "98%", label: "Satisfaction" }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Doze?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike heavy sleep apps with dozens of settings, Doze is beautifully minimal
          </p>
        </motion.div>

        {/* Why Doze - Redesigned */}
        <div className="mb-20">
          {/* Main Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 mb-8">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Moon className="w-4 h-4 text-gray-900" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Minimal. Effective. Perfect.</span>
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The Perfect Nap Experience
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No clutter, no overthinking — just tap, nap, refresh. 
              The simplest way to recharge with a perfect nap.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "One-Tap Simplicity",
                description: "No complex settings. Just pick your nap time and go.",
                color: "bg-yellow-400",
                delay: 0.1
              },
              {
                icon: Volume2,
                title: "Gentle Wake-Up",
                description: "Natural sounds instead of jarring alarms that shock you awake.",
                color: "bg-green-400",
                delay: 0.2
              },
              {
                icon: Wifi,
                title: "Perfect Timing",
                description: "Science-backed presets for optimal recharge without grogginess.",
                color: "bg-blue-400",
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="group bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center hover:bg-white/30 transition-all duration-300"
              >
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-gray-900" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-3xl p-8 mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-yellow-300 border-2 border-black rounded-xl font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300"
            >
              Download Free
            </motion.button>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Perfect For
          </h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Office workers, students, and travelers who need a quick recharge 
            without the complexity of heavy sleep apps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Office Workers", role: "Recharge during lunch breaks", icon: Briefcase, color: "bg-blue-400" },
              { name: "Students", role: "Power nap between classes", icon: GraduationCap, color: "bg-green-400" },
              { name: "Travelers", role: "Quick naps on flights", icon: Plane, color: "bg-purple-400" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
