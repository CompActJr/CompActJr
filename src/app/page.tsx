'use client' // Necessário para usar animações do Framer Motion
import { motion } from 'framer-motion'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-4">
        {/* Container com Grid de fundo (estilo que discutimos no Jira) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center"
        >
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">
            CompAct <span className="text-blue-500">Jr.</span>
          </h1>

          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-gray-400 text-xl max-w-[600px]"
          >
            Esboço da nova Landing Page dinâmica.
            Performance, animações fluidas e foco em conversão.
          </motion.p>

          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20">
              Começar Projeto
            </button>
          </motion.div>
        </motion.div>
      </main>
  )
}