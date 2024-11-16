import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-white px-3 py-2">Lates</p>
      
        <Marquee pauseOnHover={true} className="space-x-10">
            <Link to='/news'>
            shuvo!
            </Link>
            <Link to='/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio!
            </Link>
            <Link to='/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio!
            </Link>
            <Link to='/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, distinctio!
            </Link>
        </Marquee>
      
    </div>
  );
};

export default LatestNews;
