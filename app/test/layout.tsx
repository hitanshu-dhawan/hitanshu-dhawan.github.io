export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header */}
            <header className="bg-blue-600 text-white shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Test Route</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-4">
                    <div className="text-center">
                        <p className="text-m text-gray-300 mb-2">
                            Next.js Test Layout Example
                        </p>
                        <p className="text-sm text-gray-400">
                            Demonstrating layout functionality with shared header and footer
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
