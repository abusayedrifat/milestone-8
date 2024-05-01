import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DNA } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true) 
    useEffect( () => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => setPhones(data.data))
    

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phoneData = data.data.data;
        
        const phonesWithFakeData = phoneData.map( phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj
        }) ;
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData)
        setLoading(false)
    })

    }, [])
    return (
        <div>
            <h2 className="text-3xl ml-9 my-24">Phones : {phones.length} </h2>

            { loading && <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
        <BarChart width={1400} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      

        </div>
    );
};

export default Phones;