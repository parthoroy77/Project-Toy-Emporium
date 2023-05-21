import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const ToyTable = ({ toy }) => {
    const { _id, toyName, toyImg, subCategory, price, quantity, sellerName,sellerEmail, description } = toy;
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
                    {
                        price
                    }
                </td>
                <td className='text-center font-semibold'>
                    {quantity}
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">View Details</button>
                </td>
                <td>
                    <h4 className='font-semibold'>{sellerName}</h4>
                    <p>{sellerEmail}</p>
                </td>
                <td className='space-x-3'>
                    <button className="btn btn-ghost text-xl btn-sm">
                        <FaEdit></FaEdit>
                    </button>
                    <button className="btn btn-ghost btn-sm text-xl">
                        <FaTrashAlt></FaTrashAlt>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ToyTable;