import React from 'react'
import {Link} from 'react-router';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-black text-white px-4 py-1 rounded-lg w-fit'>
          <BsArrowLeft className='text-xl' />
        </Link>
        <h2 className='ml-2'>Back to Book List</h2>  
  
      
    </div>
  )
}

export default BackButton
