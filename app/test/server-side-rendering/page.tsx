import { Badge } from "@/components/ui/badge"

interface GitHubRepo {
    id: number
    name: string
}

async function getRepos(): Promise<GitHubRepo[]> {
    const response = await fetch('https://api.github.com/users/hitanshu-dhawan/repos?sort=updated&per_page=100', {
        // Disable caching to ensure fresh data on each request
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`)
    }

    return response.json()
}

export default async function ServerSideRenderingPage() {
    let repos: GitHubRepo[] = []
    let error: string | null = null

    try {
        repos = await getRepos()
    } catch (err) {
        error = err instanceof Error ? err.message : 'Something went wrong'
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
                <p className="text-muted-foreground">Server-Side Rendering (SSR) - Data fetched on server for each request</p>
                <Badge variant="outline" className="mt-2">SSR</Badge>
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
