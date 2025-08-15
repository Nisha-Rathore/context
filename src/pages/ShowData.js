import React, { useState } from 'react'
import TableBody from './TableBody'

const ShowData = () => {
  const [filter,setFilter] = useState();
  const search =(value) => {
    setFilter(value);
  };

  const reset = () => {
    setFilter(null);
  }
  return (
    <div className='px-10'>
      <div className='p-6 text-4xl'>
        <select onChange={(e) => search(e.target.value)}>
          <option value="">select city</option>
          <option>Gwenborough</option>
          <option>Wisokyburgh</option>
          <option>South Christy</option>
          <option>Bartholomebury</option>
        </select>
        <button onClick={() => reset()}>Clear</button>
        </div>
        <table className=' table w-full bg-[#92a7bb] text-black border-gray-500 border-2 leading-[50px] divide-x divide-y'>
           <thead className='bg-slate-400 text-white divide-x '>
                <th>Id</th>
                <th>Name</th>
                <th>City</th>
                <th>View</th>
           </thead>
           <tbody>
            <TableBody filter={filter}/>
           </tbody>
        </table>
      
    </div>
  )
}

export default ShowData;
