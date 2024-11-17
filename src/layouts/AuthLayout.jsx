import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <nav className="py-5 w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;