import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const CourseCard = ({course}) => {
    return (
        <div className=' group bg-foreground rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300'>
            <Link href={`/courses/${course.id}`} >
                <Image
                    src={course.image}
                    width={400}
                    height={200}
                    alt={course.title}
                    className='w-full h-50 object-cover  group-hover:scale-105  transition-all duration-300'
                /></Link>
            <div className='h-75 p-4 flex flex-col justify-between '>
                <Link href={`/courses/${course.id}`} >
                    <h4 className='group-hover:text-blue-600 transition-colors duration-300 text-2xl font-bold line-clamp-2'>{course.title}</h4>
                </Link>

                <div>
                    <p className='text-text-secondary line-clamp-2 mb-4'>{course.description}</p>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-3'>
                            <Image
                                src={course.instructorImage}
                                width={40}
                                height={40}
                                alt="Picture of the instructor"
                                className='w-13 h-13 rounded-full object-cover'
                            />
                            <p className='text-lg font-semibold'>{course.instructor}</p>
                        </div>
                        <p className='flex items-center gap-2'>
                            <FaStar className='text-yellow-600 pb-0.5' />
                            <span className='font-medium'>{course.rating}</span>
                            <span className='text-text-secondary'>({course.ratedUsers})</span>
                        </p>

                    </div>
                    <Link href={`/courses/${course.id}`} className="mt-8 py-6 w-full rounded-lg flex items-center gap-2 mr-4 btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-foreground transition-colors duration-300 text-lg font-semibold ">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard