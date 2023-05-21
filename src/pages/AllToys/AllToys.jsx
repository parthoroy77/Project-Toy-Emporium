import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import useTitleHook from '../../hooks/useTitleHook';

const AllToys = () => {
    useTitleHook('All Toys')
    const loadedToys = useLoaderData();
    const [allToys, setAllToys] = useState(loadedToys);
    const [searchText, setSearchText] = useState('');
    const handleSearchByName = () => {
        fetch(`http://localhost:5000/searchByName/${searchText}`)
            .then(res => res.json()).then(data => setAllToys(data));
    }
    return (
        <div className='px-5 lg:px-24'>
            <div className='text-center my-9'>
                <input type="text" onChange={(e) => setSearchText(e.target.value)} className="h-12 w-[30%] mx-auto input rounded-lg bg-base-300 border-collapse" name="" id="" />
                <button onClick={handleSearchByName} className='btn bg-sky-600 border-0'>Search By Name</button>
            </div>
            <div className='mb-14'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Image</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                                <th>Seller Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(toy => <ToyTable
                                    key={toy._id} toy={toy}
                                ></ToyTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;