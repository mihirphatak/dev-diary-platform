"use client"

import { useEffect, useState } from "react"

type Project = {
  id: number
  name: string
  description: string
  github_url: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <main style={{ padding: "40px" }}>
      <h1>Projects</h1>

      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.github_url}>Github</a>
        </div>
      ))}
    </main>
  )
}