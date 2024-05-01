import { useNavigate } from 'react-router-dom';
import './Meal.css'

const Meal = ({meal}) => {
    const {strMeal, strCategory, strArea, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13,strIngredient14,strIngredient15,idMeal } = meal;
    const navigate = useNavigate()
    const handleShowDetails  = () =>{
       navigate(`/meals/${idMeal}`)
    }
    return (
        <div className="border border-[#686565a3] p-6 rounded-xl space-y-4">
            <img src={strMealThumb} className="rounded shadow-lg mb-6 w-full h-[40%]" alt="" />
            <h2 className="text-2xl font-bold">{strMeal}</h2>
            <p className="common-style1">Category :  <span className='common-style2'>{strCategory}</span></p>
            <p className="common-style1">Origin : <span className='common-style2'>{strArea}</span> </p>
             <h3 className='text-2xl font-bold'>Ingredients</h3>
             
                <p className='flex gap-1'> {strIngredient1}, {strIngredient2},  {strIngredient3},  {strIngredient4} , {strIngredient5} , {strIngredient6} , {strIngredient7} , {strIngredient8} ,{strIngredient9} ,{strIngredient10}</p>
             <button onClick={handleShowDetails} className='btn'> Show Details </button>
            
        </div>
    );
};

export default Meal;