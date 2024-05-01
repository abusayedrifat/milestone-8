import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <h2 className="text-3xl">This Home page</h2>
            {
                navigation === 'loading'? <p>Loading</p>:
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;