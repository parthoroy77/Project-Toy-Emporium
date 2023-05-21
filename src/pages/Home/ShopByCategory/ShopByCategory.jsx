import React, { useState } from 'react';
const ShopByCategory = () => {
    const [toys, setToys] = useState()
    return (
        <div className='px-5 my-10 lg:px-24'>
            <div className='text-center'>
                <h2 className='text-4xl'>Shop By Category</h2>
                <p className='text-lg font-semibold text-[#757575] my-3'>Here are some awesome collection based on different category</p>
            </div>
            <div className='text-center space-x-4'>
                <button className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Sports Cars</button>
                <button className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Trucks</button>
                <button className='bg-blue-200 rounded-3xl hover:bg-blue-100 font-semibold px-8 py-3'>Regular Cars</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ShopByCategory;