import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const gymPriceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          features: [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Personalized workout plan",
            "Discounts on gym merchandise"
          ],
          price: "$29.99/month"
        },
        {
          id: 2,
          name: "Standard Membership",
          features: [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to group classes",
            "Locker room access",
            "Personalized workout plan",
            "Nutritional consultation",
            "Discounts on gym merchandise"
          ],
          price: "$49.99/month"
        },
        {
          id: 3,
          name: "Premium Membership",
          features: [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to group classes",
            "Access to sauna and spa facilities",
            "Locker room access",
            "Personalized workout plan",
            "Nutritional consultation",
            "Weekly personal training sessions",
            "Discounts on gym merchandise"
          ],
          price: "$79.99/month"
        }
      ];
      

    return (
        <div>
            <h3>best price in the town: {gymPriceOptions.length}</h3>
            {
             gymPriceOptions.map(option => <PriceOption 
                option={option}
                key={option.id}></PriceOption>)

            }
            
        </div>
    );
};

export default PriceOptions;