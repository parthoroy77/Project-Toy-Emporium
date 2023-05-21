import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`, { method: 'GET' }).then(res => res.json())
        .then(data => setMyToys(data))
    }, [])
    const handleDeleteToy = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteToy/${id}`, { method: 'DELETE' })
                    .then(res => res.json()).then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setMyToys(myToys.filter(toy => toy._id !== id))
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div className='px-5 lg:px-24'>
            <h3 className='text-center my-7 font-bold text-3xl'>My Toys</h3>
            <div className=''>
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
                                <th>Update Or Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(toy => <MyToyRow
                                    handleDeleteToy={handleDeleteToy}
                                    key={toy._id} toy={toy}></MyToyRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;