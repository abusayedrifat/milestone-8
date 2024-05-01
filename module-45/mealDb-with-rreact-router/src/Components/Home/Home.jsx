import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="lg:max-w-[1440px] mx-auto">
            <Header></Header>
            <div className=" max-w-[1440px] mx-auto px-7">
            {/* <h1 className=" text-3xl font-bold mt-14 text-center">Welcome to our store</h1> */}
            <h2 className=" my-14 lg:text-7xl lg:leading-[90px] font-anton">WE SELL BEST MEAL <br /> IN TOWN </h2>
            </div>
            <Outlet></Outlet>
    </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;