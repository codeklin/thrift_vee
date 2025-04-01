"use client"

import { useEffect, useState } from "react"

interface Circle {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export function BackgroundCircles() {
  const [circles, setCircles] = useState<Circle[]>([])

  useEffect(() => {
    const colors = [
      "rgba(236, 72, 153, 0.1)", // pink
      "rgba(59, 130, 246, 0.1)", // blue
      "rgba(16, 185, 129, 0.1)", // green
      "rgba(245, 158, 11, 0.1)", // amber
      "rgba(139, 92, 246, 0.1)", // purple
    ]

    const generateCircles = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const newCircles: Circle[] = []

      for (let i = 0; i < 15; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * windowWidth,
          y: Math.random() * windowHeight * 3, // Multiply by 3 to spread circles down the page
          size: Math.random() * 100 + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setCircles(newCircles)
    }

    generateCircles()

    window.addEventListener("resize", generateCircles)
    return () => window.removeEventListener("resize", generateCircles)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
          }}
        />
      ))}
    </div>
  )
}

