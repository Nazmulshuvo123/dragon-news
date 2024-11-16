import { Link } from "react-router-dom";
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="div"></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='career'>Career</Link>
            </div>
            <div className="login">
               <div className="flex items-center gap-3">
                  <img src={user} alt="" /> 
                  <button className="btn w-32 btn-neutral text-white font-bold rounded-none border-none">Login</button>
               </div>
                

            </div>

        </div>
    );
};

export default Navbar;