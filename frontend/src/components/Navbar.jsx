import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl shadow-sm transition-colors duration-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <Link to="/" className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent ' >
                    Expensa
                </Link>
                <div className='flex items-center space-x-4'>
                    <ThemeToggle />
                    <Link to="/signin" className='px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' >
                        Sign In
                    </Link>
                    <Link to="/signup" className = "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 text-white hover:opacity-90">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  );
};



