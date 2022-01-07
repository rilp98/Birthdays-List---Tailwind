import React from 'react';

const Person= ({image,name,years}) =>{
 return(
  <div className=' h-16  w-full flex items-center my-8'>
    <img src={image} alt={name} />

    <div className='pl-2.5'>

    <h4 className='font-semibold' >{name}</h4>

    <p className='text-gray-400'>{years} years</p>

    </div>

  </div>
 );
}

export default Person;