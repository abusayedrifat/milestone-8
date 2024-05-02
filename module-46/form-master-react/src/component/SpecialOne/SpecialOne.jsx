import { useContext } from "react";
import { AssetContext } from "../GrandFtaher/GrandFather";


const SpecialOne = () => {
  const gift = useContext(AssetContext)
    return (
        <div>
          <h2>Special One</h2> 
          <p> {gift} </p> 
        </div>
    );
};

export default SpecialOne;