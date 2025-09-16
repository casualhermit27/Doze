'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Perfect for trying out Doze",
      features: [
        "Core nap presets (15, 25, 45 min)",
        "2 gentle wake sounds",
        "Basic soundscapes",
        "Offline ready"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$1.99",
      period: " one-time",
      description: "Unlock all features and sounds",
      features: [
        "All wake-up sounds",
        "Premium soundscapes",
        "Simple streaks tracking",
        "Dark mode",
        "No ads",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Monthly",
      price: "$0.99",
      period: "/month",
      description: "Flexible monthly subscription",
      features: [
        "Everything in Pro",
        "Monthly updates",
        "Cloud sync",
        "Advanced analytics",
        "Custom sounds",
        "Cancel anytime"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/10 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-yellow-400 border-2 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-black fill-current" />
                      <span className="text-black font-bold text-sm">Most Popular</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className={`bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl p-6 h-full shadow-lg flex flex-col ${plan.popular ? 'border-yellow-400/60' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-green-400 border border-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 px-6 font-semibold rounded-xl border-2 border-black transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]'
                      : 'bg-white/30 text-black hover:bg-white/40'
                  }`}
                >
                  {plan.name === "Free" ? "Download Free" : "Get Pro"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
