import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-full max-w-lg p-10 shadow-2xl">
            <form className="card-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
