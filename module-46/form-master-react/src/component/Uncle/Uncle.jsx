import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'rifat'}></Cousin>
                <Cousin name={'sifat'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;