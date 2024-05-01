import PropTypes from 'prop-types'; // ES6

const Links = ({route}) => {
    return (
        <div className=" ">
            <li className="hover:bg-yellow-400 py-2 px-6 text-xl"><a href={route.routePlace}> {route.name} </a></li>
        </div>
    );
};
Links.propTypes = {
    route: PropTypes.object
}

export default Links;