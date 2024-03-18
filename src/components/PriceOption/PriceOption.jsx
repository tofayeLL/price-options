import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 font-bold py-6 text-white space-y-5 my-6 rounded-lg px-4 flex flex-col'>
            <h2>
                <span className='text-3xl'>{price}</span>
                {/* <span className='text-3xl'>/mon</span> */}
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature
                        feature={feature}
                        key={index}></Feature>)
                }
            </div>

            <button className='btn bg-green-500 w-full  font-bold text-lg text-white border-none'> Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;