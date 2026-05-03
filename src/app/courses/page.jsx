

import { getCourses, wait } from '@/lib/utils'
import SectionHeading from '@/components/shared/SectionHeading'

import AllCourses from '@/components/sections/AllCourses'

const CoursesPage = async () => {
    let courses = null;
    let error = null;

    try {
        courses = await getCourses();
    } catch (err) {
        console.error('Failed to fetch courses:', err);
        error = true;
    }

    return (
        <div className='py-20'>
            {/* container */}
            <div className='max-w-350 mx-auto'>
                <SectionHeading
                    title='All Courses' />

                {
                    error ? <ErrorMessage /> : <>
                        <AllCourses courses={courses} />
                    </>
                }

            </div>
        </div>
    )
}

export default CoursesPage