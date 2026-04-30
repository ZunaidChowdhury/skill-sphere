
import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import Link from 'next/link'
import { ArrowRight, User } from 'lucide-react'
import { SiGreatlearning, SiSololearn } from 'react-icons/si';
import { PiCertificate } from 'react-icons/pi';


const whyData = [
    {
        id: 1,
        title: 'Expert Instructors',
        des: 'Learn from industry professionals.',
        icon: User,
    },
    {
        id: 2,
        title: 'Hands-on Learning',
        des: 'Practical Projects and real-world skills.',
        icon: SiGreatlearning ,
    },
    {
        id: 3,
        title: 'Flexible Learning',
        des: 'Learn anytime, anywhere at your own pace.',
        icon: SiSololearn ,
    },
    {
        id: 4,
        title: 'Certificate',
        des: 'Earn certificates and boost your career.',
        icon: PiCertificate ,
    },
];

const WhyChooseUs = () => {
    return (
        <div className='py-20'>
            {/* container */}
            <div className='max-w-350 mx-auto bg-blue-100 rounded-lg overflow-hidden grid grid-cols-[5fr_2fr]'>
                <div className='p-4'>
                    <SectionHeading
                        title='Your Success is Our Mission'
                        subTitle='Why Choose Us' />

                    {/* content  */}
                    <div className=' pt-8 grid grid-cols-4 gap-3'>
                        {
                            whyData.map(item => {
                                const IconComponent = item.icon; return <div key={item.id} className=' rounded-lg  flex gap-3 '>
                                    <div className='shrink-0 bg-blue-300 p-2 w-12 h-12 rounded-full flex justify-center items-center'>

                                        <IconComponent size={36} className='text-blue-600' />
                                    </div>
                                    <div>
                                        <h4 className='text-base font-bold'>
                                            {item.title}
                                        </h4>
                                        <p className='text-text-secondary mb-4'>
                                            {item.des}
                                        </p>
                                    </div>
                                </div>
                            })}



                    </div>
                </div>
                <div className='bg-blue-800 p-6 space-y-3'>
                    <h4 className='text-foreground text-2xl font-bold'>
                        Start Your Learning Journey Today!
                    </h4>
                    <p className='text-foreground opacity-60 mb-4'>
                        Join thousands of learners buidling in-demand skills and advancing their careers.
                    </p>
                    <Link href='/register' className="rounded-lg btn text-base font-semibold bg-foreground shadow-none text-blue-600">
                        Join Now<ArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs