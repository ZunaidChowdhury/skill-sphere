'use client'
import { GraduationCap, LogIn, UserPlus } from 'lucide-react'
import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavBar = () => {
    const pathname = usePathname()
    return (
        <div className='border-b border-zinc-200'>
            <div className="navbar bg-foreground max-w-350 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-semibold">
                            <li className={`${pathname === '/' ? 'border-l-4 border-blue-600' : ''}`}><Link href='/' className={`p-2 text-base font-semibold hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/' ? 'text-blue-600' : ''}`}>Home</Link></li>
                            <li className={`${pathname === '/courses' ? 'border-l-4 border-blue-600' : ''}`}><Link href='/courses' className={`p-2 text-base font-semibold hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/courses' ? 'text-blue-600' : ''}`}>Courses</Link></li>
                            <li className={`${pathname === '/user/profile' ? 'border-l-4 border-blue-600' : ''}`}><Link href='user/profile' className={`p-2 text-base font-semibold hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/user/profile' ? 'text-blue-600' : ''}`}>My Profile</Link></li>
                            <li><Link href='/register' className="rounded-lg tablet:hidden w-full flex items-center gap-2 mr-4 btn text-base font-semibold bg-blue-600 hover:bg-blue-700 text-foreground">
                                <UserPlus />Register</Link></li>

                        </ul>
                    </div>
                    <Link href='/' className="flex items-center gap-2">
                        <GraduationCap
                            className='text-primary mb-1'
                            // color="blue"
                            size={36}
                            strokeWidth={2}
                        />
                        <span className='text-xl font-semibold'>SkillSphere</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-semibold ">
                        <li className={`${pathname === '/' ? 'border-b-4 border-blue-600' : ''}`}><Link href='/' className={`hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/' ? 'text-blue-600' : ''}`}>Home</Link></li>
                        <li className={`${pathname === '/courses' ? 'border-b-4 border-blue-600' : ''}`}><Link href='/courses' className={`hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/courses' ? 'text-blue-600' : ''}`}>Courses</Link></li>
                        <li className={`${pathname === '/user/profile' ? 'border-b-4 border-blue-600' : ''}`}><Link href='user/profile' className={`hover:bg-transparent hover:text-blue-600 transition-colors duration-300 ${pathname === '/user/profile' ? 'text-blue-600' : ''}`}>My Profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link href='/log-in' className="rounded-lg flex items-center gap-2 mr-4 btn tablet: hover:text-blue-700 transition-colors duration-300 text-base font-semibold text-text-primary">
                        <LogIn />Log in</Link>
                    <Link href='/register' className="rounded-lg hidden tablet:flex items-center gap-2 mr-4 btn text-base font-semibold bg-blue-600 hover:bg-blue-700 text-foreground">
                        <UserPlus />Register</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar