'use client'
import NavLink from './NavLink';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function Sidebar(){
  const pathname = usePathname();
  const chat = pathname.startsWith('/chat');
  const game = pathname.startsWith('/game');
  const profile = pathname.startsWith('/profile');
  const settings = pathname.startsWith('/settings');
  const tournament = pathname.startsWith('/tournament');
  const home = pathname === '/';
  const [isVisible, setIsVisible] = useState(true);

  // const handleClick = (choice:boolean) => {
  //   choice?setIsVisible(false):setIsVisible(true)

  // };
    return (
      <div className='flex  w-full justify-between z-10 '  >
        <div className="flex gap-8 w-[50%] h-full z-10 relative left-8" >
          <img src="cinemas-megarama (1).png" className='w-[20%]  relative top-4 left-0 z-10' alt="" />
          <nav className=' text-white w-full lg:w-[50%] lg:h-full h-16 flex lg:flex  relative top-2 lg:gap-[5%] z-10'>
            <NavLink  href='/home' isActive={home}><h1>Home</h1></NavLink>
            <NavLink href='/dashboard' isActive={home}><h1>Movies</h1></NavLink>
            <NavLink href='/dashboard' isActive={home}><h1>Tv shows</h1></NavLink>
            <NavLink href='/dashboard' isActive={home}><h1>Kids</h1></NavLink>
          </nav>
        </div>
        <div className='flex   w-[50%] relative  left-50 justify-center z-10' style={{ background: 'linear-gradient(to bottom, black 1%, transparent 100%)' }}  >
          <input type="text " className=' bg-white/80 w-64 h-7 rounded-md text-start relative top-6 left-64 z-10'  />
          <CiSearch className='text-[26px] text-black relative right-[35px] bg-transparent z-10  left-56 top-6 ' />
          <NavLink href='/profile' isActive={profile}><CgProfile className='text-white text-[35px] relative top-5 left-64 z-10'/></NavLink>
        </div>
      </div>
    )
}
export default Sidebar 