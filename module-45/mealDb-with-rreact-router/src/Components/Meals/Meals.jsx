import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";


const Meals = () => {
    const mealses = useLoaderData()
    const {meals} = mealses
    
    return (
        <div>
            <h1>Total meals: {meals.length} </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1340px] p-8">
            
            {
                meals.map(meal =><Meal key={meal.idMeal} meal={meal} ></Meal> )
            }
        </div>
        </div>
    );
};

export default Meals;