import { useState } from "react";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">Xpensa</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {/* <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#features" className="hover:text-yellow-400">Features</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a> */}
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-all">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-yellow-400">Home</a>
          <a href="#features" className="block hover:text-yellow-400">Features</a>
          <a href="#pricing" className="block hover:text-yellow-400">Pricing</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-all w-full">
            Get Started
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">Xpensa</span>
          </h1>
          <p className="text-xl mb-6">
            Simplify your finances with smart expense tracking. Take control of your spending today!
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-500 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose <span className="text-blue-500">Xpensa</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Easy Expense Tracking</h3>
              <p className="text-gray-600">Track all your daily expenses effortlessly with our easy-to-use platform.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud-Based</h3>
              <p className="text-gray-600">Access your finances anywhere with secure cloud syncing across all devices.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Insights & Reports</h3>
              <p className="text-gray-600">Get insights into your spending patterns with detailed reports and graphs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
}
