
import { getCourses, wait } from '@/lib/utils'
import SectionHeading from '@/components/shared/SectionHeading'
import ErrorMessage from '@/components/ErrorMessage'
import CourseCard from '@/components/cards/CourseCard'

const CoursesPage = async () => {
    await wait(100);
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
                {/* content  */}
                {
                    error ? <ErrorMessage /> : <div className=' grid grid-cols-3 gap-8 pt-10'>
                            {/* card */}
                            {
                                courses.map(course => <CourseCard key={course.id} course={course} />)
                            }
                        </div>
                }

            </div>
        </div>
    )
}

export default CoursesPage