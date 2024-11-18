import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
  const {createNewUser, setUser} = useContext(AuthContext);
  const [error, setError] = useState({});
  const handleSubmit = (e) =>{
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if(name.length <5){
      setError({ ...error, name: "More then 5 character"});
      return;
    }
    const photo = form.get("url");
    const email = form.get("email");
    const password = form.get("password");

    console.log({name, photo, email, password});

    createNewUser(email, password)
    .then((result) =>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error =>{
      console.log("Error", error.massage)
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-full max-w-lg p-10 shadow-2xl">
            
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-3xl pb font-semibold text-[#403F3F]">
                Register your account
              </h1>
              <div className="form-control">

                <label className="label">
                  <span className="label-text font-bold text-[#403F3F]">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input rounded-none bg-[#F3F3F3]"
                  required
                />
              </div>
              {
                error.name && (
                  <label className="label text-red-600 font-bold text-sm">
                     {error.name}
                </label>
                )
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="url"
                  placeholder="Enter your photo URL"
                  className="input rounded-none bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input rounded-none bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input rounded-none bg-[#F3F3F3]"
                  required
                />
              </div>
              <div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                   
                    <input
                      type="checkbox"
                      className="checkbox"
                    />
                     <span className="">Accept Terms And Condition</span>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">
                  Register
                </button>
              </div>
            </form>

            <p className="text-center font-semibold text-[#706F6F]">Already Have An Account ? <Link to="/auth/login" ><span className="text-red-500 font-semibold">Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
