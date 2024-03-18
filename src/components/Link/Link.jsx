import PropTypes from 'prop-types'

const Link = ({ route }) => {
    const { name, path } = route;
    return (

        <li >
            <a href={path}>{name}</a>
        </li>



    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;