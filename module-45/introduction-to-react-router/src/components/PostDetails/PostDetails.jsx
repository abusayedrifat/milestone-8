import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }
    const {title, body, id} = postDetail 
    return (
        <div className="flex flex-col justify-center">
            <div className="border border-[#625f5f88] p-6 my-10 mx-auto w-[700px]">
            <h2 className="font-bold text-center text-3xl"> {id} </h2>
            <h1 className="font-bold text-center text-2xl my-4">{title}</h1>
            <p className="mb-8 text-[#4a4444ec]">{body}</p>
            
        </div>
     
        <button onClick={handleGoBack} className="mx-auto my-8 p-3 w-[150px] border rounded-xl bg-slate-400">Go back</button>

        </div>
    );
};

export default PostDetails;