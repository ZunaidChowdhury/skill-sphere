import React from 'react'
import SectionHeading from '../shared/SectionHeading'

const TopInstructors = () => {
    return (
        <div className='pt-20'>
            {/* container */}
            <div className='max-w-7xl mx-auto'>

                <SectionHeading
                    title='Learn from the Best'
                    subTitle='Top Instructors'
                    actionBtnTitle='View All Instructors'
                    actionBtnUrl='/' />
            </div>
        </div>
    )
}

export default TopInstructors