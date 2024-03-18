import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
    return (
        <div className='px-6'>
            <p className='flex justify-start items-center gap-2'> <FaCheckCircle className='text-green-400'></FaCheckCircle> {feature}</p>

        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;