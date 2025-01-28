import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const Card = ({product}) => {
    const {_id,name,photo,prices,newPrices,category}= product
    return (
        <div>
            <div className="card border">
                <figure>
                  <img
                    className='h-60 p-2 object-cover'
                    src={photo}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
              
                  </h2>
                  <p className='flex font-bold text-[#FC8934] items-center'><TbCurrencyTaka size={20} /> {newPrices} / <span className='flex items-center text-gray-500 font-normal line-through text-sm'> <TbCurrencyTaka size={20} /> {prices}</span> </p>
                 <button className='btn w-full bg-[#FC8934] text-white rounded-2xl'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Card;