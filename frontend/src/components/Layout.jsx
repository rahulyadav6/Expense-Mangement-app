import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout(){
    return(
        <div className="">
            <Navbar />
            <div>
                <Outlet/>
            </div>
            Footer
        </div>
    );
}