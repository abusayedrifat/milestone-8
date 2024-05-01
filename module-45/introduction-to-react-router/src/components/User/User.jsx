import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, email, address, id} = user
    return (
        <div className=" bg-yellow-500 text-center border p-6 rounded-xl">
            <p className="text-lg font-bold">{name}</p>
            <p> 
                Email: {email}
            </p>
            <p>
                Address : {address.city}
            </p>
            <Link to={`/user/${id}`} >Show Details</Link>
        </div>
    );
};

export default User;