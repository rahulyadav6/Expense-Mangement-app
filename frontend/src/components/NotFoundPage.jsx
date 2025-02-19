import { ArrowRight, Receipt, Home } from 'lucide-react';
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl overflow-hidden text-center p-8">
        <div className="mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Receipt className="w-64 h-64" />
          </div>
          <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! Looks like this transaction couldn&apos;t be processed. The page you&lsquo;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            <ArrowRight className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <a
            href="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Return Home
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm">
            Need help? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}