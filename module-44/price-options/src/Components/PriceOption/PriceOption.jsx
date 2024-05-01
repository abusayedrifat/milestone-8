import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {price, name, features} = option
    return (
        <div className=" flex flex-col bg-red-100 text-[#1d1a1ae2] text-xl text-center rounded-lg px-7 py-10">
            <div className="mb-8">
                <span className="font-extrabold text-5xl">{price} $</span>
                <span className=" font-semibold">/mon.</span>
            </div>
            <h2 className= "text-3xl font-semibold">{name}</h2>
          
           <div className="flex-grow mt-9">
           {
                features.map( (feature, idx) => <Feature key={idx} feature={feature}></Feature> )
            }
           </div>
           
           <button className="btn bg-green-500 mt-12 w-full text-white text-xl font-bold  align-baseline"> Get in now </button>
        
        </div>
    );
};

export default PriceOption;