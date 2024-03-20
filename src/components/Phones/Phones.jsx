
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RotatingLines } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loadData, setLoadData] = useState(true)
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
                setLoadData(false)
            });

    }, [])
    console.log(phones);





    return (
        <div >


            {/* loading spinner condition  */}
            {/* <div className="w-[100%] flex justify-center items-center py-10 ">
                {
                    loadData ? <RotatingLines  ></RotatingLines>  : ' '
                }
            </div> */}

            {/* another condition */}

            {
                loadData && <div className="w-[100%] flex justify-center items-center">
                    <RotatingLines
                        visible={true}
                        height="200"
                        width="200"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />

                </div>
            }








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