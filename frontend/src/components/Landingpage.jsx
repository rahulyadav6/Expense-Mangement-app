import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-64">
          <h1 className="text-6xl font-bold mb-6 mt-10">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Take Control
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">of Your Finances</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Track expenses, manage budgets, and achieve your financial goals with our powerful and intuitive platform.
          </p>
          <div className="flex gap-6 justify-center mb-16">
          <Link
              to="/signup"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Start For Free →
            </Link> 
            <button className="px-8 py-4 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Smart Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automatically categorize and track your expenses with our intelligent system
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Cross-Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access your finances seamlessly across all your devices
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Bank-Grade Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your data is protected with state-of-the-art encryption and security measures
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;