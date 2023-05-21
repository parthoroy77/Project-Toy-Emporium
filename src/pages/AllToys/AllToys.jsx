import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [allToys, setAllToys] = useState(loadedToys);
    return (
        <div className='px-5 lg:px-24'>
            <div className='my-14'>
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