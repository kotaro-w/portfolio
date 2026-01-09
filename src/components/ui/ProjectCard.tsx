'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import Badge from './Badge'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass glass-hover rounded-xl overflow-hidden group"
    >
      {/* プロジェクト画像 */}
      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-6xl">
          📁
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* プロジェクト情報 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="tools" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-400 self-center">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* リンク */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Live Demo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
