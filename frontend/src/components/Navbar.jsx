export function Navbar(){
<nav className="bg-gray-900 text-white p-4 fixed w-full top-0 left-0 z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
        <span className="text-yellow-400">Xpensa</span>
        </div>
        <div className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#features" className="hover:text-yellow-400">Features</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-all">
            Get Started
        </button>
        </div>
    </div>
</nav>

}

