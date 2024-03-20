
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        /*   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
              .then(res => res.json())
              .then(data => setPhones(data.data))
  
   */


        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])

                    }
                    return obj;
                })

                setPhones(phonesFakeData);
            });

    }, [])
    console.log(phones);





    return (
        <div>
            <h3 className="text-xl font-bold">phones: {phones.length}</h3>
            <BarChart width={1200} height={600} data={phones}>
                
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
              
            </BarChart>

        </div>
    );
};

export default Phones;