import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { getCourses } from '@/lib/utils'

const FeaturedCourses = async () => {
    const courses = await getCourses();
    courses.sort((a, b) => b.rating - a.rating);
    // console.log('courses', courses);

    return (
        <div className='pt-20'>
            {/* container */}
            <div className='max-w-7xl mx-auto'>
                <SectionHeading
                    title='Top Rated Courses'
                    subTitle='Popular Courses'
                    actionBtnTitle='View All Courses'
                    actionBtnUrl='/courses' />
                {/* content  */}
                <div className=' grid grid-cols-3 gap-8 pt-4'>
                    {/* card */}
                    {
                        courses.slice(0, 3).map(course => <div key={course.id} className=' group rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300'>
                            <Link href={`/courses/${course.id}`} >
                                <Image
                                    src={course.image}
                                    width={400}
                                    height={200}
                                    alt={course.title}
                                    className='w-full h-50 object-cover  group-hover:scale-105  transition-all duration-300'
                                /></Link>
                            <div className='h-55 p-4 flex flex-col justify-between gap-4'>
                                <Link href={`/courses/${course.id}`} >
                                    <h4 className='group-hover:text-blue-600 transition-colors duration-300 text-2xl font-bold line-clamp-2'>{course.title}</h4></Link>
                                <div>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className='flex items-center gap-3'>
                                            <Image
                                                src={course.instructorImage}
                                                width={40}
                                                height={40}
                                                alt="Picture of the instructor"
                                                className='w-10 h-10 rounded-full object-cover'
                                            />
                                            <p className='font-semibold'>{course.instructor}</p>
                                        </div>
                                        <p className='flex items-center gap-2'>
                                            <FaStar className='text-yellow-600 pb-0.5' />
                                            <span className='font-medium'>{course.rating}</span>
                                            <span className='text-text-secondary'>({course.ratedUsers})</span>
                                        </p>

                                    </div>
                                    <Link href={`/courses/${course.id}`} className="w-full rounded-lg flex items-center gap-2 mr-4 btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-foreground transition-colors duration-300 text-base font-semibold ">
                                        View Details</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses