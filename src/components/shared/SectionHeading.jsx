import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SectionHeading = ({ title, subTitle, actionBtnTitle, actionBtnUrl }) => {
    return (
        < div className='flex items-center justify-between' >
            <div>
                {
                    subTitle && <p className='uppercase font-semibold text-blue-600 text-sm'>{subTitle}</p>
                }              
                <h3 className='text-4xl font-semibold'>{title}</h3>
            </div>
            {
                actionBtnTitle && <Link href={actionBtnUrl} className="rounded-lg flex items-center gap-2 mr-4 text-blue-600 tablet: hover:text-blue-700 transition-colors duration-300 text-base font-semibold">
                    {actionBtnTitle}<ArrowRight /></Link>
            }
        </div >
    )
}

export default SectionHeading