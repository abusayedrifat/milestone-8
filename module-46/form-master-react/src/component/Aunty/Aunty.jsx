
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MOneyContext } from "../GrandFtaher/GrandFather";


const Aunty = () => {
   
    const [money, setMoney] = useContext(MOneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'samia'}></Cousin>
                <Cousin name={'samiha'}></Cousin>
                
            </section>
            <p> get Money : {money} </p>
            <button onClick={()=> setMoney(money +1000)} > Add More Money </button>

        </div>
    );
};

export default Aunty;