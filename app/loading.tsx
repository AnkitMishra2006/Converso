export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
            <p className="text-gray-500 mt-2">Please wait while we fetch your companions.</p>
        </div>
    );
} 