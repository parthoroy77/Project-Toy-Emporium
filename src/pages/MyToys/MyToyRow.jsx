import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const MyToyRow = ({ toy, handleDeleteToy }) => {
    const { _id, toyName, toyImg, subCategory, price, quantity, sellerName, sellerEmail, description } = toy;
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedData = {
            price, quantity, description
        }
        fetch(`https://toy-emporium-server-snowy.vercel.app/updateData/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Data Updated Successfully')
            }
        })
    }
    return (
        <>
            <tr>
                <th>
                    {
                        toyName
                    }
                </th>
                <td>
                    <img src={toyImg} className="mask mask-squircle w-12 h-12" alt="" />
                </td>
                <td>
                    {
                        subCategory
                    }
                </td>
                <td>
                    ${
                        price
                    }
                </td>
                <td className='text-center font-semibold'>
                    {quantity}
                </td>
                <td>
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-ghost btn-xs">View Details</button>
                    </Link>
                </td>
                <td className='space-x-3'>
                    <label htmlFor="my-modal-5" className="btn btn-ghost text-xl btn-sm">
                        <FaEdit></FaEdit>
                    </label>
                    <button >

                    </button>
                    <button onClick={() => handleDeleteToy(_id)} className="btn btn-ghost btn-sm text-xl">
                        <FaTrashAlt></FaTrashAlt>
                    </button>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg text-center mb-5">Update Toys</h3>
                            <div>
                                <form onSubmit={handleUpdate} className='w-[90%] mx-auto space-y-3'>
                                    <div className='space-y-3'>
                                        <div className="form-control">
                                            <input type="text" placeholder="Price" name='price' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                                        </div>
                                        <div className="form-control">
                                            <input type="text" placeholder="Quantity" name='quantity' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <input type="text" placeholder="Description" name='description' className="h-16 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                                    </div>
                                    <div className='text-center my-3'>
                                        <input type="submit" value='Update Toy' className='btn border-0 w-full mx-auto bg-blue-400' />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn btn-sm">Close</label>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

        </>
    );
};

export default MyToyRow;