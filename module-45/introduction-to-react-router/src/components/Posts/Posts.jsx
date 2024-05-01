import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="max-w-[90%] mx-auto ">
           <h2 className="text-center text-3xl my-8 font-bold">Posts : {posts.length} </h2> 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            posts.map( post => <Post key={post.id} post={post} ></Post> )
           }
           </div>
        </div>
    );
};

export default Posts;