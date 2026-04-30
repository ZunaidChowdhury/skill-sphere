
import { FaStar } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading'
import Image from 'next/image';

const instructorsData = [
    {
        id: 1,
        name: 'John Smith',
        profession: 'Web Developer',
        rating: 4.8,
        ratedBy: 2100,
        instructorImage: "/instructors/i1.png",
    },
    {
        id: 2,
        name: 'Steve Smith',
        profession: 'UI/UX Designer',
        rating: 4.9,
        ratedBy: 1800,
        instructorImage: "/instructors/i2.png",
    },
    {
        id: 3,
        name: 'David Brown',
        profession: 'Digital Marketing Expert',
        rating: 4.7,
        ratedBy: 1500,
        instructorImage: "/instructors/i3.png",
    },
    {
        id: 4,
        name: 'David Beckham',
        profession: 'Content Strategist',
        rating: 4.8,
        ratedBy: 1200,
        instructorImage: "/instructors/i5.png",
    }
];

const TopInstructors = () => {
    console.log(instructorsData);
    return (
        <div className='pt-20'>
            {/* container */}
            <div className='max-w-7xl mx-auto'>

                <SectionHeading
                    title='Learn from the Best'
                    subTitle='Top Instructors'
                    actionBtnTitle='View All Instructors'
                    actionBtnUrl='/' />

                <div className='mt-4 grid grid-cols-4 gap-6'>
                    {
                        instructorsData.map(instructor => <div key={instructor.id} className='bg-foreground rounded-lg border border-zinc-200 shadow-lg p-6 flex flex-col justify-center items-center gap-3'>
                            <div className='shrink-0  w-20 h-20 rounded-full flex flex-col justify-center items-center'>
                                <Image
                                    src={instructor.instructorImage}
                                    width={100}
                                    height={100}
                                    alt="Instructor image"

                                />
                            </div>
                            <div>
                                <h4 className='text-xl font-bold text-center'>
                                    {instructor.name}
                                </h4>
                                <p className='text-text-secondary text-center'>
                                    {instructor.profession}
                                </p>

                                <p className='flex items-center justify-center gap-2'>
                                    <FaStar className='text-yellow-600 pb-0.5' />
                                    <span className='font-medium'>{instructor.rating}</span>
                                    <span className='text-text-secondary'>({instructor.ratedBy})</span>
                                </p>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default TopInstructors















