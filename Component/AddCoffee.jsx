import React from 'react';

const AddCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-extrabold'>Add A Coffee</h1>
            <form> 
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Add</span>
                        </label> <br />
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div> <br />

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Quantity</span>
                        </label> <br />

                        <label className="input-group">
                            
                            <input type="text" name='quantity' placeholder="Coffee Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>



        </div>
    );
};

export default AddCoffee;