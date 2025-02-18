import { Link } from "react-router-dom";

export function Landingpage(){
    return(
        <section id="home" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">Xpensa</span>
          </h1>
          <p className="text-xl mb-6">
            Simplify your finances with smart expense tracking. Take control of your spending today!
          </p>
          <Link to="/signup">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-500 transition-all">
            Get Started
          </button>
          </Link>
        </div>
      </section>
    );
}
