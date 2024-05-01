import { useState } from "react";
import Links from "../Links/Links";
import { FaBars} from "react-icons/fa6";
import { CgClose } from "react-icons/cg";



 
 const Navbar = () => {
    const [open, setOpen] = useState(true)
    const routes = [
        {id:1, routePlace:"/page1", name:"Home"},
        {id:2, routePlace:"/page2", name:"about"},
        {id:3, routePlace:"/page3", name:"Info"},
        {id:4, routePlace:"/page4", name:"Contact"},
        {id:5, routePlace:"/page5", name:"More"}
    ]

    return (

        <div>
            <nav className="bg-yellow-200 p-6 ">
            <div  className="text-3xl md:hidden" onClick={ () => setOpen(!open)}>

            {
                open === true ? <CgClose></CgClose> : <FaBars></FaBars>
            }
            </div>
            <ul className={`md:flex md:static md:mt-0 mt-6 text-center absolute bg-yellow-200 duration-1000 ease-in-out ${open ? 'top-12' : '-top-80'}`}>
            {
                routes.map(route => <Links key={route.id} route = {route}></Links>  )
            }
            </ul>
            </nav>
            
        </div>
    );
 };
 
 export default Navbar;