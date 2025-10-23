import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

async function getRepos(): Promise<GitHubRepo[]> {
    const response = await fetch('https://api.github.com/users/hitanshu-dhawan/repos?sort=updated&per_page=20', {
        // Cache for 1 hour during build time
        next: { revalidate: 3600 }
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`)
    }

    return response.json()
}

export default async function StaticSiteGenerationPage() {
    let repos: GitHubRepo[] = []
    let error: string | null = null
    let buildTime: string = new Date().toISOString()

    try {
        repos = await getRepos()
    } catch (err) {
        error = err instanceof Error ? err.message : 'An error occurred'
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
                <p className="text-muted-foreground">Static Site Generation (SSG) - Data fetched at build time and cached</p>
                <div className="flex gap-2 mt-2">
                    <Badge variant="outline">SSG</Badge>
                    <Badge variant="secondary">Built at: {new Date(buildTime).toLocaleString()}</Badge>
                </div>
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