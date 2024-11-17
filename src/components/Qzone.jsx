import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png"
import cla from "../assets/class.png"
import bg from "../assets/bg.png"

const Qzone = () => {
    return (
        <div>
             <h2 className="font-semibold text-[#403F3F] text-xl mb-3">Q - Zone</h2>
             <div className="bg-gray-200 flex flex-col py-10">
                 <div  className="flex justify-center "><img src={swimming} alt="" /></div>
                 <div  className="flex justify-center pt-8 pb-8"><img src={ cla } alt="" /></div>
                 <div  className="flex justify-center"><img src={playground} alt="" /></div>
                
             </div>
             <div  className="flex justify-center mt-8">
               <img src={ bg} alt="" />
             </div>
        </div>
    );
};

export default Qzone;
