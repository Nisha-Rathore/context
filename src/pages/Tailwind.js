import React from 'react'

const Tailwind = () => {
  return (
    <div className='bg-slate-900'>
       <nav className='w-full flex h-14 bg-indigo-200 justify-between'>
          <div>Nisha Rathore</div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <button type='button'>Login/Signup</button>
          </div>
       </nav>
    </div>
  )
}

export default Tailwind