import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {

    const details = useLoaderData();
    const {meals} = details
   const navigate = useNavigate()
   const handleGoBack =()=>{
    navigate(-1)
   }
    return (
        <div className="max-w-[50%] mx-auto px-10 my-28 flex flex-col space-y-10">
        <div className="flex flex-col justify-center items-center px-10 border border-[#686565a3] p-6 rounded-xl space-y-6">
            <img src={meals[0].strMealThumb} className=" h-72 rounded-lg" alt="" />
            <h1 className="text-center text-3xl font-extrabold">Cooking Instruction of {meals[0].strMeal} </h1>
            <p> {meals[0].strInstructions} </p>
        </div>
        <button onClick={handleGoBack} className="btn text-xl font-extrabold">GO BACK</button>
        </div>
    );
};

export default MealDetails;