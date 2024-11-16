import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-[#403F3F] text-xl mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start font-medium text-[16px]  text-[#706F6F]"><img src={fb} alt="" />Facebook</button>
        <button className="btn join-item justify-start font-medium text-[16px]  text-[#706F6F]"> <img src={twitter} alt="" />Twitter</button>
        <button className="btn join-item justify-start font-medium text-[16px] text-[#706F6F]"> <img src={instagram} alt="" />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
