export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="text-center">
                {/* Animated Logo/Spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-200" />
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin" />
                    {/* Inner dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary-500 animate-pulse" />
                    </div>
                </div>

                {/* Text */}
                <p className="text-neutral-600 font-medium animate-pulse">
                    Carregando...
                </p>
            </div>
        </div>
    );
}
