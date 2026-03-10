"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"))
  }, [])

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dev Diary Platform</h1>
      <p>{message}</p>
    </main>
  )
}