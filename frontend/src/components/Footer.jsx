import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              ExpenseTracker
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Take control of your finances with our powerful expense tracking solution.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@expensetracker.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Finance Street, Money City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
