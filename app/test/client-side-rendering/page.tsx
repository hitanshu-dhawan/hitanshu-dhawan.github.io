"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

interface GitHubRepo {
    id: number
    name: string
    description: string | null
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    updated_at: string
}

export default function ClientSideRenderingPage() {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://api.github.com/users/hitanshu-dhawan/repos?sort=updated&per_page=20')

                if (!response.ok) {
                    throw new Error(`Failed to fetch repositories: ${response.status}`)
                }

                const data = await response.json()
                setRepos(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
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
                <p className="text-lg">Loading repositories... (CSR)</p>
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                    <Card key={repo.id} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {repo.name}
                                </a>
                            </CardTitle>
                            <CardDescription>{repo.description || "No description available"}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {repo.language && (
                                    <Badge variant="secondary">{repo.language}</Badge>
                                )}
                                <Badge variant="outline">⭐ {repo.stargazers_count}</Badge>
                                <Badge variant="outline">🍴 {repo.forks_count}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Updated: {new Date(repo.updated_at).toLocaleDateString()}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
