'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 動くグラデーション背景 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(120deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            'linear-gradient(240deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)',
            'linear-gradient(360deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)',
            'linear-gradient(120deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* グラデーションブロブ1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '10%', y: '20%' }}
      />

      {/* グラデーションブロブ2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #764ba2 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '70%', y: '60%' }}
      />

      {/* グラデーションブロブ3 */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f093fb 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '40%', y: '80%' }}
      />
    </div>
  )
}
