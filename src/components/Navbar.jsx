import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 '>
        <div className="mycontainer flex  items-center px-4 py-5 justify-between h-14 mycontainer text-white">
        <div className='logo font-bold text-white text-2xl'>
        <span className='text-green-700'>   &lt;</span>
          
            Pass
            <span className='text-green-700'>OP/&gt;</span>
       
            </div>
      <ul>
        <li className='flex gap-14'>
            <a href="/" className='hover:font-bold'>Home</a>
            <a href="#" className='hover:font-bold'>About</a>
            <a href="#" className='hover:font-bold'>Contact</a>
            
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
