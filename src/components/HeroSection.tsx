'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Orange spotlight behind heading */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-80 bg-orange-400/25 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900"
              >
                Doze
                <br />
                <span className="text-blue-600 italic font-medium">recharge</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                The simplest way to recharge with a perfect nap. 
                Take a quick nap, wake up refreshed.
              </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-8 py-4 text-base font-semibold text-black bg-yellow-300 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300 min-w-[160px] justify-center"
            >
              Download free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-black bg-pink-300 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300 min-w-[160px] justify-center"
            >
              Try demo
            </motion.button>
          </motion.div>

          {/* Phone Windows Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-16"
          >
            <div className="flex justify-center items-center gap-8 flex-wrap">
                  {/* Left 2 phones - small */}
                  <div className="w-52 h-[28rem] bg-gray-900 rounded-3xl p-0.5 shadow-xl">
                    <div className="w-full h-full bg-white rounded-[1.375rem] relative overflow-hidden">
                      {/* Status bar */}
                      <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      {/* Nap Timer App content */}
                      <div className="p-4 space-y-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                            <span className="text-2xl">😴</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">Doze</div>
                          <div className="text-xs text-gray-500">Quick Recharge</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-sm font-bold text-white">15 min</span>
                          </div>
                          <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                            <span className="text-xs text-gray-600">25 min</span>
                          </div>
                          <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                            <span className="text-xs text-gray-600">45 min</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>•</span>
                          <span>•</span>
                          <span>•</span>
                        </div>
                      </div>
                    </div>
                  </div>
              <div className="w-52 h-[28rem] bg-gray-900 rounded-3xl p-0.5 shadow-xl">
                <div className="w-full h-full bg-white rounded-[1.375rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Sound Selection Screen content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-400 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🔊</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">Wake Sounds</div>
                      <div className="text-xs text-gray-500">Gentle Alerts</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-8 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-white">🐦 Birds</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600">🔔 Chimes</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600">🌊 Ocean</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center phone - large */}
              <div className="w-64 h-[32rem] bg-gray-900 rounded-3xl p-0.5 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.375rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-gray-100 flex items-center justify-between px-4 text-sm">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Main Nap Timer App content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-xl">
                        <span className="text-4xl">😴</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">Doze</div>
                      <div className="text-sm text-gray-600 mb-1">Ready to nap?</div>
                      <div className="text-xs text-gray-400">Choose your perfect duration</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-12 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold text-white">15 min</span>
                        <span className="ml-2 text-xs text-white/80">Perfect</span>
                      </div>
                      <div className="h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                        <span className="text-base text-gray-600">25 min</span>
                        <span className="ml-2 text-xs text-gray-400">Power</span>
                      </div>
                      <div className="h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                        <span className="text-base text-gray-600">45 min</span>
                        <span className="ml-2 text-xs text-gray-400">Deep</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-10 bg-gradient-to-r from-green-300 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-base font-bold text-white">Start Nap</span>
                        <span className="ml-2 text-xs text-white/80">▶</span>
                      </div>
                      <div className="h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-sm text-gray-600">⚙️ Settings</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 2 phones - small */}
              <div className="w-52 h-[28rem] bg-gray-900 rounded-3xl p-0.5 shadow-xl">
                <div className="w-full h-full bg-white rounded-[1.375rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Wake-up Screen content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🌅</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">Wake Up!</div>
                      <div className="text-xs text-gray-500">Time to rise</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-8 bg-gradient-to-r from-pink-300 to-rose-400 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-white">😴 Snooze</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600">⏹️ Stop</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Great nap! You're refreshed</div>
                      <div className="text-xs text-gray-400">15 min • 2:30 PM</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-6 h-1 bg-pink-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-52 h-[28rem] bg-gray-900 rounded-3xl p-0.5 shadow-xl">
                <div className="w-full h-full bg-white rounded-[1.375rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* Settings Screen content */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-violet-400 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">Settings</div>
                      <div className="text-xs text-gray-500">Customize</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-between px-3 border border-gray-200">
                        <span className="text-xs text-gray-600">🔊 Sounds</span>
                        <span className="text-xs text-gray-400">🐦 Birds</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-between px-3 border border-gray-200">
                        <span className="text-xs text-gray-600">🔊 Volume</span>
                        <span className="text-xs text-gray-400">75%</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center justify-between px-3 border border-gray-200">
                        <span className="text-xs text-gray-600">🌙 Dark Mode</span>
                        <span className="text-xs text-gray-400">Off</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="h-4 bg-gray-50 rounded-lg flex items-center justify-between px-2">
                        <span className="text-xs text-gray-500">Notifications</span>
                        <div className="w-4 h-2 bg-green-300 rounded-full"></div>
                      </div>
                      <div className="h-4 bg-gray-50 rounded-lg flex items-center justify-between px-2">
                        <span className="text-xs text-gray-500">Auto-start</span>
                        <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
