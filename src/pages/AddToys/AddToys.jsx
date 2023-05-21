import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitleHook from '../../hooks/useTitleHook';

const AddToys = () => {
    useTitleHook('Add Toys')
    const { user } = useContext(AuthContext);
    const [subCategory, setSubCategory] = useState('');
    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.toyName.value;
        const toyImg = form.toyImg.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        const addToy = {
            toyName,toyImg,subCategory,price,quantity,ratings,sellerName,sellerEmail,description
        }
        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addToy)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                toast.success('Toy Added Successfully')
                // form reset
            }
        })
    }
    return (
        <div className='py-14'>
            <div className='text-center font-bold text-3xl my-5'>
                <h3>Add Toys</h3>
            </div>
            <div className='w-[75%] mx-auto'>
                <form onSubmit={handleAddToy} >
                    <div className=' grid grid-cols-2 gap-3 mb-3'>
                        <div className="form-control">
                            <input type="text" placeholder="Toy Name" name='toyName' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Toy Image Url" name='toyImg' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Seller Name" name='sellerName' defaultValue={user.displayName} className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Seller Email" name='sellerEmail' defaultValue={user.email} className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <select className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                        >
                            <option value="">Select a sub-category</option>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Regular Car">Regular Car</option>
                            <option value="Truck">Truck</option>
                        </select>
                        <div className="form-control">
                            <input type="text" placeholder="Price" name='price' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Ratings" name='ratings' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Quantity" name='quantity' className="h-12 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                        </div>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Description" name='description' className="h-16 w-full mx-auto input rounded-sm bg-base-300 border-collapse" />
                    </div>
                    <div className='text-center my-3'>
                        <input type="submit" value='Add Toy' className='btn border-0 w-full mx-auto bg-blue-400' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;