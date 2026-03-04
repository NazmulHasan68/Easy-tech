export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      {/* Spinner */}
      <div className="relative w-16 h-16 mb-6">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-spin border-t-green-900"></div>
        {/* Inner ring */}
        <div className="absolute inset-2 border-4 border-gray-200 rounded-full animate-spin border-t-green-500"></div>
        {/* Center dot */}
        <div className="absolute inset-1/2 w-3 h-3 bg-green-900 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Company Name */}
      <h1 className="text-2xl font-bold text-green-600 tracking-wide animate-pulse">
        Easy Tech
      </h1>
    </div>
  );
}
