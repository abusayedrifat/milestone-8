import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandFather.css'

export const AssetContext = createContext('gold')
export const MOneyContext = createContext(1000)
const GrandFather = () => {

    const [money, setMoney] = useState(1000)
    return (

        <div className="grandFather">
            <h2>Grand-Father</h2>
            <p> {money} </p>
          <MOneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value='gold'>
           <section className='flex'>
           <Father></Father>
           <Uncle></Uncle>
           <Aunty></Aunty>

           </section>
           </AssetContext.Provider>
          </MOneyContext.Provider>
        </div>
    );
};

export default GrandFather;