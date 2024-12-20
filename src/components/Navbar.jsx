import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    
    const {user, logOut} = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center">

            <div className="div">{user && user.email}</div>
            
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='career'>Career</Link>
            </div>
            <div className="login">
               <div className="flex items-center gap-3">
                {
                    user && user?.email?
                     (<div>
                        <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div>)
                    : <img src={userIcon} alt="" /> 
                }
                 

                  {
                    user && user?.email? ( 
                    <button onClick={logOut} className="btn w-32 btn-neutral text-white font-bold rounded-none border-none">Log Out</button> ):
                    ( <Link to= "/auth/login" className="btn w-32 btn-neutral text-white font-bold rounded-none border-none">Login</Link>)
                  }
                 
               </div>
                

            </div>

        </div>
    );
};

export default Navbar;