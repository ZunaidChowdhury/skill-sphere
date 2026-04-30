
import { ArrowRight, PackageOpen, Star, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCode, FaStar } from 'react-icons/fa'
import { SiCardmarket, SiCodesignal } from 'react-icons/si'

const Hero = () => {
    return (
        <div className='bg-blue-100'>
            {/* container  */}
            <div className='max-w-350 mx-auto grid grid-cols-[1fr_1.2fr] items-center py-20'>
                {/* col1 */}
                <div className='space-y-6 '>
                    <p className='w-fit text-blue-700 font-semibold bg-blue-200 px-6 py-1 rounded-full'>Learn. Grow. Succeed.</p>
                    <h1 className='group text-text-primary text-7xl font-extrabold'>
                        Upgrade Your<br />Skills Today
                        <span className="inline-block group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" role="img" aria-label="rocket"> 🚀</span>
                    </h1>
                    <p className='text-text-secondary text-xl'>Master the skills that matter. From coding to creative design,
                        join 10,000+ students building their future today.</p>
                    <Link href='/courses' className="rounded-lg btn text-base font-semibold bg-blue-600 hover:bg-blue-700 text-foreground">
                        Explore Courses<ArrowRight /></Link>

                    <div className='flex items-center gap-8 mt-6'>
                        {/* e1 */}
                        <div className='flex items-center gap-3'>
                            <User size={36} className='text-blue-600' />
                            <div>
                                <h4 className='text-xl font-semibold'>10K+</h4>
                                <p className='text-text-secondary'>Students</p>
                            </div>
                        </div>

                        {/* e2 */}
                        <div className='flex items-center gap-3'>
                            <PackageOpen size={36} className='text-blue-600' />
                            <div>
                                <h4 className='text-xl font-semibold'>200K+</h4>
                                <p className='text-text-secondary'>Courses</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-3'>
                            <Star size={36} className='text-blue-600' />
                            <div>
                                <h4 className='text-xl font-semibold flex items-center gap-1'>4.8<FaStar className='mb-1'/></h4>
                                <p className='text-text-secondary'>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col2 */}
                <div className='relative justify-self-end'>
                    <Image
                        src="/hero-img.png"
                        width={1000}
                        height={500}
                        alt="Learning image"

                    />
                    <div className='absolute top-36 right-8 flex items-center gap-3 bg-foreground py-2 px-3 rounded-xl'>
                        <div className='bg-blue-800 p-2 rounded-lg'>
                            <FaCode  size={24} className='text-white' />
                        </div>
                        <div>
                            <h4 className='text-base font-semibold'>Web Development</h4>
                        </div>
                    </div>

                    <div className='absolute top-16 left-16 flex items-center gap-3 bg-foreground py-2 px-3 rounded-xl'>
                        <div className='bg-purple-800 p-2 rounded-lg'>
                            <SiCardmarket  size={24} className='text-white' />
                        </div>
                        <div>
                            <h4 className='text-base font-semibold'>Digital Marketing</h4>
                        </div>
                    </div>

                    <div className='absolute top-60 left-3 flex items-center gap-3 bg-foreground py-2 px-3 rounded-xl'>
                        <div className='bg-green-800 p-2 rounded-lg'>
                            <SiCodesignal  size={24} className='text-white' />
                        </div>
                        <div>
                            <h4 className='text-base font-semibold'>UI/UX Design</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero