import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { SlBookOpen } from 'react-icons/sl'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { LuAlarmClockCheck } from 'react-icons/lu'

const LearningTips = () => {
    return (
        <div className='pt-20'>
            {/* container */}
            <div className='max-w-7xl mx-auto'>

                <SectionHeading
                    title='Smart Ways to Learn'
                    subTitle='Learning Tips' />

                {/* content  */}
                <div className=' pt-4 grid grid-cols-2 gap-8'>
                    {/* card1 */}
                    <div className='bg-purple-100 rounded-lg border border-purple-200 p-6 flex gap-6'>
                        <div className='shrink-0 bg-purple-500 p-2 w-24 h-24 rounded-full flex justify-center items-center'>
                            <SlBookOpen size={50} className=' text-white' />
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold'>
                                Effective Study Techniques
                            </h4>
                            <p className='text-text-secondary mb-4'>
                                Use active recall, mind maps, and spaced repetition to retain information
                                better and learn smarter.
                            </p>
                            <Link href='/' className="rounded-lg flex items-center gap-2 mr-4 text-blue-600 tablet: hover:text-blue-700 transition-colors duration-300 text-base font-semibold">
                                Read More<ArrowRight /></Link>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className='bg-green-100 rounded-lg border border-green-200 p-6 flex gap-6'>
                        <div className='shrink-0 bg-green-500 p-2 w-24 h-24 rounded-full flex justify-center items-center'>
                            <SlBookOpen size={50} className=' text-white' />
                        </div>
                        <div>
                            <h4 className='text-2xl font-bold'>
 Time Management Tips
                            </h4>
                            <p className='text-text-secondary mb-4'>
                                Plan your day, set priorities, and avoid distractions to
                                stay productive and achieve your goals.
                            </p>
                            <Link href='/' className="rounded-lg flex items-center gap-2 mr-4 text-blue-600 tablet: hover:text-blue-700 transition-colors duration-300 text-base font-semibold">
                                Read More<ArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningTips