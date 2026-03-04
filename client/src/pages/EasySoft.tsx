'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react'

import logo from '../assets/img/logo/easy-logo.png'

// Products Data
const products = [
  { name: "EasyManager", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyLedger", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyPOS", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyAccounts", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyInventory", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyResturant", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyHRM", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyHMS", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyAnaly AI", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
  { name: "EasyLMS", path: "https://easy-soft-porfolio.vercel.app/", logo: logo },
]

export default function EasySoft() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl mt-12 font-extrabold text-[#416e42] mb-4 text-center">
        Discover the EasySoft Suite
      </h2>
      <p className="text-center text-[#416e42]/90 mb-12 max-w-2xl mx-auto">
        Explore our collection of innovative software solutions designed to optimize your business workflows, enhance productivity, and drive growth. Each product is built with efficiency, reliability, and user experience in mind.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0px 15px 30px rgba(0,0,0,0.15)' }}
            className="relative flex flex-col items-center text-center p-6 bg-white dark:bg-[#416e42]/5 border border-[#416e42]/20 rounded-3xl hover:bg-[#98bc62]/10 transition-all duration-300"
          >
            {/* Logo */}
            {product.logo && (
              <img
                src={product.logo}
                alt={product.name}
                className="w-20 h-20 object-contain mb-5 rounded-full"
              />
            )}

            {/* Product Name */}
            <h3 className="text-xl font-semibold text-[#416e42] dark:text-white mb-2">
              {product.name}
            </h3>

            {/* Short Description (optional) */}
            <p className="text-sm text-[#416e42]/80 dark:text-white/70 mb-5">
              Streamline your operations with {product.name}.
            </p>

            {/* Explore Link */}
            <Link
              to={product.path}
              target="_blank"
              className="mt-auto inline-flex items-center justify-center gap-2 w-12 h-12 bg-[#416e42] hover:bg-[#98bc62] text-white rounded-full shadow-md transition-colors"
              aria-label={`Explore ${product.name}`}
            >
              <SquareArrowOutUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}