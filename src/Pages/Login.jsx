import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext)
  const [error, setError] = useState({})
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
  const handleLogin = (e) =>{

      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log({email, password});

      userLogin(email, password)
      .then((result)=>{
        const user = result.user;
        console.log(user)
        setUser(user)
        navigate(location?.state? location.state: '/')
      })
      .catch((err)=>{
        setError({ ...error, login: err.code});
      })
  }
  return (
    
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          
            
          <div className="card bg-base-100 w-full max-w-lg p-10 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl pb font-semibold text-[#403F3F]">Login Your Account</h1>
              <div className="form-control">
                <label className="label">
                  <span className=" font-bold text-start">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-red">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {error.login && (<label className="label text-red-600 font-bold text-sm">
                   {error.login}
                </label>)}
                <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
            </form>
            <p className="text-center font-semibold text-[#706F6F]">Don't Have An Account ? <Link to="/auth/register" ><span className="text-red-500 font-semibold">Register</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
