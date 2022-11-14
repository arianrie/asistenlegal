import { MenuList } from '../constans/';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
  const [isOpen, setIsOpen ] = useState(false);
 return (
    <nav className="flex flex-row justify-between mx-10 lg:items-center font-sans lg:mx-20 py-10">
        <div className="lg:w-3/12 font-bold text-2xl">Logo</div>
        <div className="lg:hidden" onClick={()=>(isOpen === false ? setIsOpen(true) : setIsOpen(false))}>Menu</div>
        <div className={`lg:w-9/12 lg:flex flex-col lg:flex-row transition duration-3 ${!isOpen ? 'hidden' : 'duration-3  flex absolute right-[5rem] top-[5rem] bg-orange-500 px-10 py-10 z-[100]'}  lg:space-x-10 lg:justify-end`}>
          {MenuList.map((item)=>(
            <Link href={ item.link } key={item.id}><span className="text-2xl">{ item.title }</span></Link>
          ))}
        </div>
      </nav>
 )
}
