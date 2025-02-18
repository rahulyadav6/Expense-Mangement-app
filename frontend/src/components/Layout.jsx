import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout(){
    return(
        <div className="h-screen bg-gradient-to-r from-blue-500 to-green-500">
            <Navbar />
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}