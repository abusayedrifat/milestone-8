import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title, body} =post;
    const navigate = useNavigate();

    const handleShowDetail= () =>{
        navigate(`/postDetails/${id}`)
    }
    return (
        <div className="border border-[#625f5f88] rounded-xl p-4 flex flex-col">
            <h1 className="font-bold mb-4 text-lg">{title}</h1>
            <p className="text-[#4a4444ec] mb-6 flex-grow"> {body} </p>
            <Link to={`/postDetails/${id}`}><button className="text-[#6b22e9] font-semibold">Show details</button></Link>
            <button onClick={handleShowDetail} className="mt-4 p-3 w-[150px] border rounded-lg bg-slate-400">Show Detail</button>
        </div>
    );
};

export default Post;