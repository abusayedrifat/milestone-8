import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import { DNA } from 'react-loader-spinner'
import { useEffect, useState } from "react";
const Users = () => {
    const users = useLoaderData()
    const [loading, setLoading] = useState(true) ;
    useEffect( () =>{
        setLoading(false)
           
       },[] )
    return (
        <div>
             { loading && <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
            <h2 className="text-2xl text-green-900">Our Users : {users.length} </h2>
            <div className="grid grid-cols-3 gap-7">
                {
                    users.map(user => <User key={user.id} user={user}  ></User> )
                }
            </div>
        </div>
    );
};

export default Users;