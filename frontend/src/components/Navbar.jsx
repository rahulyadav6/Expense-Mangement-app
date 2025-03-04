import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Navbar = () => {
    const [userEmail, setUserEmail] = useState(null);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const fetchUser = async()=>{
            try{
                const res = await axios.get("http://localhost:3000/api/v1/user/me",{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserEmail(res.data.email);
            }catch(err){
                console.error("Error fetching user data", err)
            }
        }
        fetchUser();
    },[userEmail])
    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserEmail("");
        window.location = ("/signin");
    };
  return (
    <nav className='fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl shadow-sm transition-colors duration-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <Link to="/" className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent ' >
                    Expensa
                </Link>
                <div className='flex items-center space-x-4'>
                    <ThemeToggle />
                    {userEmail ?(
                        <>
                        <span className='dark:text-white'>{userEmail}</span> 
                        <button 
                            onClick={handleLogout}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:opacity-90"
                            >
                                Logout
                            </button>
                        </>
                    ): (
                        <>
                            <Link to="/signin" className='px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' >
                                Sign In
                            </Link>
                            <Link to="/signup" className = "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 text-white hover:opacity-90">
                                Get Started
                            </Link>
                        </>
                    )
                        
                    }
                </div>
            </div>
        </div>
    </nav>
  );
};



