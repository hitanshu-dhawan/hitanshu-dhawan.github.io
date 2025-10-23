"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="text-2xl font-bold">
        Count: {count}
      </div>
      <Button variant="outline" onClick={handleClick}>
        Click me to increase counter!
      </Button>
    </div>
  );
}
