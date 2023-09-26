function ErrorPage() {
    return <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600">Page not found</p>
                <p className="mt-4">
                    <a
                        href="/"
                        className="text-green-600 hover:underline transition duration-300"
                    >
                        Go back to the homepage
                    </a>
                </p>
            </div>
        </div>
    </>
}

export default ErrorPage