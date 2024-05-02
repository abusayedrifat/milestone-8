import SpecialOne from "../SpecialOne/SpecialOne";


const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p> {name} </p>
            { name === 'samiha' && <SpecialOne></SpecialOne> }
        </div>
    );
};

export default Cousin;