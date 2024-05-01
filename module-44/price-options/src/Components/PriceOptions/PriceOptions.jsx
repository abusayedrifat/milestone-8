import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "description": "Access to cardio and weightlifting areas only",
            "features": ["Cardio Area", "Weightlifting Area"]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "description": "Access to cardio, weightlifting, and group exercise rooms",
            "features": ["Cardio Area", "Weightlifting Area", "Group Exercise Rooms"]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "description": "Access to all facilities including pool, sauna, and personal training sessions",
            "features": ["Cardio Area", "Weightlifting Area", "Group Exercise Rooms", "Pool", "Sauna", "Personal Training"]
          }
        ]
      
      
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center">Best prices in the Town</h2>
           <div className="grid lg:grid-cols-3 gap-6 m-10">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption> )
            }
           </div>
            
        </div>
    );
};

export default PriceOptions;



