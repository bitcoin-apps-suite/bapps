'use client'

import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  path: string
  features: string[]
  icon: string
  url?: string
  status?: 'live' | 'development' | 'coming-soon'
  color?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const getStatusBadge = () => {
    switch(project.status) {
      case 'live':
        return <span className="status-badge live">LIVE</span>
      case 'development':
        return <span className="status-badge dev">IN DEVELOPMENT</span>
      case 'coming-soon':
        return <span className="status-badge soon">COMING SOON</span>
      default:
        return <span className="status-badge dev">IN DEVELOPMENT</span>
    }
  }

  const cardColor = project.color || '#ff9500'

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderLeftColor: cardColor,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div className="card-header">
        <span className="project-icon">{project.icon}</span>
        <div className="project-title-wrapper">
          <h3 className="project-title">₿ {project.title}</h3>
          {getStatusBadge()}
        </div>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="features-list">
        {project.features.map((feature, idx) => (
          <span key={idx} className="feature-tag">
            {feature}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <div className="path-info">
          <span className="path-label">Path:</span>
          <code className="path-value">{project.path}</code>
        </div>
        {project.url && (
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="launch-btn"
            style={{ backgroundColor: cardColor }}
          >
            Launch App
          </a>
        )}
      </div>
    </div>
  )
}