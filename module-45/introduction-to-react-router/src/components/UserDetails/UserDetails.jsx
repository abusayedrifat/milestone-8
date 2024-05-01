import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, address} = user;
    
    
    return (
        <div>
         
            <h2 className="text-2xl font-bold">User Details</h2>
            <p className="text-lg font-semibold">Name : {name} </p>
            <p className="text-lg font-semibold">Address: {address.city} </p>
        </div>
    );
};

export default UserDetails;