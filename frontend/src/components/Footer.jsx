export function Footer(){
    return(
        <>
        <section id="features" className="py-16 bg-white ">
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
        <footer id="contact" className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 Xpensa. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-3">Privacy</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500 mx-3">Terms of Service</a>
        </div>
      </footer>
      </>
    );
}