import Link from 'next/link';

export default function TestPage() {
    return (
        <div className="container mx-auto px-4 py-8">

            <h1 className="text-3xl font-bold mb-2">Test Route...</h1>
            <p className="text-muted-foreground">
                This is a test route to test out Next.js functionalities
            </p>

            <div className="space-y-2 text-sm mt-8 text-gray-500">
                <p>
                    ➔ <Link href="/test/client-side-rendering" className="text-blue-500 hover:underline">Client-Side Rendering (CSR)</Link>
                </p>
                <p>
                    ➔ <Link href="/test/server-side-rendering" className="text-blue-500 hover:underline">Server-Side Rendering (SSR)</Link>
                </p>
                <p>
                    ➔ <Link href="/test/static-site-generation" className="text-blue-500 hover:underline">Static Site Generation (SSG)</Link>
                </p>

            </div>

        </div>
    );
}
