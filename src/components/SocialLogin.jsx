import { FaGoogle , FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-[#403F3F] text-xl mb-3">Login With</h2>
           <div className="*:w-full space-y-2">
              <div className="btn"> <FaGoogle />Login With Google</div>
              <div className="btn"> <FaGithub />Login With Github</div>
           </div>
        </div>
    );
};

export default SocialLogin;