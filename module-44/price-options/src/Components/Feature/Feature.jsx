import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
     
         <div className="flex gap-2 w-[270px] mx-auto text-left">
            {/* <ul className="flex flex-row justify-between items-center">
                <li><IoCheckmarkDone></IoCheckmarkDone>  {feature}</li>
            </ul> */}
            <span className="  mt-2 text-green-500"> <FaCheckCircle></FaCheckCircle></span>
            <span>{feature}</span>
        </div>
   
    );
};

export default Feature;