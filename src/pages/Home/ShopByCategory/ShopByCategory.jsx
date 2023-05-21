import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
const ShopByCategory = () => {
    const [toys, setToys] = useState();
    const [query, setQuery] = useState('Sports Car');
    useEffect(() => {
        fetch(`http://localhost:5000/subCategory/${query}`)
        .then(res => res.json()).then(data => setToys(data))
    }, [query])
    console.log(toys);
    return (
        <div className='px-5 my-10 lg:px-24'>
            <div className='text-center'>
                <h2 className='text-4xl'>Shop By Category</h2>
                <p className='text-lg font-semibold text-[#757575] my-3'>Here are some awesome collection based on different category</p>
            </div>
            <div className='text-center space-y-3 space-x-4'>
                <button onClick={()=> setQuery('Sports Car')} className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Sports Cars</button>
                <button onClick={() => setQuery('Truck')} className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Trucks</button>
                <button onClick={() => setQuery('Regular Car')} className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Regular Cars</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-5 gap-5'>
                {
                    toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;