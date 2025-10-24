"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

interface GitHubRepo {
    id: number
    name: string
}

export default function ClientSideRenderingPage() {

    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true)

                const response = await fetch('https://api.github.com/users/hitanshu-dhawan/repos?sort=updated&per_page=100')

                if (!response.ok) {
                    throw new Error(`Failed to fetch repositories: ${response.status}`)
                }

                const data = await response.json()
                setRepos(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        fetchRepos()
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <Spinner className="w-8 h-8" />
                <p className="text-lg">Loading repositories...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <p className="text-red-500 text-lg">Error: {error}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">GitHub Repositories</h1>
                <p className="text-muted-foreground">Client-Side Rendering (CSR) - Data fetched in browser</p>
                <Badge variant="outline" className="mt-2">CSR</Badge>
            </div>

            <div className="space-y-2">
                {repos.map((repo) => (
                    <div key={repo.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        {repo.name}
                    </div>
                ))}
            </div>

        </div>
    )
}
