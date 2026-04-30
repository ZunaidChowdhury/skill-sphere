
import { ArrowRight, PackageOpen, Star, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='bg-blue-100'>
            {/* wrapper  */}
            <div className='max-w-7xl mx-auto grid grid-cols-[1fr_1.2fr] items-center '>
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
                                <h4 className='text-xl font-semibold flex items-center gap-1'>4.8<FaStar /></h4>
                                <p className='text-text-secondary'>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* col2 */}
                <div className='justify-self-end '>
                    <Image
                        src="/hero-img.png"
                        width={1000}
                        height={500}
                        alt="Picture of the author"

                    />
                </div>
            </div>
        </div>
    )
}

export default Hero