import CourseCurriculumAccordion from '@/components/CourseCurriculumAccordion';
import ErrorMessage from '@/components/ErrorMessage';
import NotFound from '@/components/NotFound';
import { getCourseCurriculum, getCourses } from '@/lib/utils';
import {
    Star, Clock, BarChart, Folder, Check,
    Smartphone, Award, Heart
} from 'lucide-react';
import { BiInfinite } from 'react-icons/bi';

export async function generateStaticParams() {
    const courses = await getCourses();
    return courses.map(course => ({
        id: course.id.toString(),
    }));
}


const CourseDetailsPage = async ({ params }) => {

    const { id } = await params;
    if (isNaN(Number(id))) {
        return <NotFound />
    }
    const courses = await getCourses();
    const courseData = courses.find(course => course.id === Number(id));
    // console.log('courseData: ', courseData);
    if (!courseData) {
        return <NotFound />
    }

    const courseCurriculum = await getCourseCurriculum();
    const courseCurriculumData = courseCurriculum.find(curr => curr.id === Number(id));
    // console.log('courseCurriculumData: ', courseCurriculumData);

    return (

        <div className="max-w-350 mx-auto py-20 text-text-primary">
            <div className="grid grid-cols-[2fr_1fr] gap-8">
                {/* left side */}
                <div >
                    <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
                    <p className="text-xl text-text-secondary-600 mb-6">{courseData.description}</p>

                    <div className="flex flex-wrap gap-6 mb-8 text-base font-medium">
                        <span className="flex items-center gap-1 text-amber-500"><Star size={18} fill="currentColor" /> {courseData.rating} ({courseData.reviews} ratings)</span>
                        <span className="flex items-center gap-1"><Clock size={18} /> {courseData.duration}</span>
                        <span className="flex items-center gap-1"><BarChart size={18} /> {courseData.level}</span>
                        <span className="flex items-center gap-1"><Folder size={18} /> {courseData.category}</span>
                    </div>

                    {/* instructor  */}
                    <div className="flex items-center gap-4 mb-10">
                        <img src={courseData.instructorImage} alt="Instructor" className="rounded-full w-18 h-18" />
                        <div>
                            <p className="text-sm text-slate-500">Instructor</p>
                            <p className="text-xl font-bold">{courseData.instructor}</p>
                            <p className="text-base text-slate-500">{courseData.instructorProfession}</p>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">About this course</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            This complete web development bootcamp is designed to take you from a complete beginner to a confident full-stack developer. You'll learn modern technologies and build real-world projects to strengthen your portfolio.
                        </p>
                    </section>

                    <section className="mb-10 bg-blue-100 p-8 rounded-xl border border-blue-100">
                        <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {courseData.learningPoints.map((point, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <Check className="text-green-600 mt-1 shrink-0" size={18} />
                                    <span className="text-base text-slate-700">{point}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <CourseCurriculumAccordion curriculum={courseCurriculumData.curriculum} />
                </div>

                {/* right col */}
                <div >
                    <div className="sticky top-40 border border-zinc-200 rounded-lg p-6 shadow-sm">
                        <div className="aspect-video bg-slate-200 rounded-lg mb-6 overflow-hidden">
                            <img src={courseData.image} alt="Course preview" className="w-full h-full object-cover" />
                        </div>

                        <div className="text-3xl font-bold mb-6">{courseData.price}</div>

                        <button className="cursor-pointer w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg mb-4 hover:bg-blue-700 transition-colors">
                            Enroll Now
                        </button>

                        <button className="btn w-full flex items-center justify-center gap-2  font-medium py-4 mb-8 text-lg">
                            <Heart size={20} /> Add to Wishlist
                        </button>

                        <div className="space-y-4 text-base text-text-secondary">
                            <div className="flex items-center gap-3"><Clock size={18} /> {courseData.duration} of video content</div>
                            <div className="flex items-center gap-3"><Smartphone size={18} /> Access on mobile and TV</div>
                            <div className="flex items-center gap-3"><BiInfinite size={18} /> Full lifetime access</div>
                            <div className="flex items-center gap-3"><Award size={18} /> Certificate of completion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage

