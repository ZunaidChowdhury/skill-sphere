import CourseCurriculumAccordion from '@/components/CourseCurriculumAccordion';
import { getCourseCurriculum, getCourses } from '@/lib/utils';
import {
    Star, Clock, BarChart, Folder, Check,
    Smartphone, Award, Heart
} from 'lucide-react';
import { BiInfinite } from 'react-icons/bi';


const courseData2 = {
    title: "Complete Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    rating: 4.9,
    reviews: 1240,
    duration: "20 hours",
    level: "Beginner",
    category: "Development",
    instructor: {
        name: "John Doe",
        role: "Web Developer & Instructor",
        image: "/api/placeholder/48/48"
    },
    learningPoints: [
        "Build responsive websites using HTML, CSS and JavaScript",
        "Master modern JavaScript (ES6+) and DOM manipulation",
        "Learn backend development with Node.js and Express",
        "Work with databases like MongoDB",
        "Build RESTful APIs and authentication systems",
        "Deploy full-stack applications to the cloud"
    ],
    curriculum: [
        {
            "title": "1. Introduction",
            "totalTime": "15 min",
            "lectures": [
                { "title": "Welcome to the Course", "duration": "05:30" },
                { "title": "Course Overview", "duration": "09:30" }
            ]
        },
        {
            "title": "2. HTML Fundamentals",
            "totalTime": "1h 30m",
            "lectures": [
                { "title": "How the Web Works", "duration": "12:15" },
                { "title": "HTML Document Structure", "duration": "10:45" },
                { "title": "Essential Tags & Elements", "duration": "18:30" },
                { "title": "Working with Lists and Tables", "duration": "15:00" },
                { "title": "HTML Forms and Input", "duration": "22:10" },
                { "title": "Semantic HTML5", "duration": "11:20" }
            ]
        },
        {
            "title": "3. CSS Fundamentals",
            "totalTime": "1h 45m",
            "lectures": [
                { "title": "Introduction to CSS", "duration": "08:45" },
                { "title": "Selectors and Specificity", "duration": "15:30" },
                { "title": "The Box Model", "duration": "20:15" },
                { "title": "Positioning and Layout", "duration": "22:45" },
                { "title": "Flexbox Deep Dive", "duration": "25:00" },
                { "title": "CSS Grid Essentials", "duration": "12:45" }
            ]
        },
        {
            "title": "4. JavaScript Basics",
            "totalTime": "3h",
            "lectures": [
                { "title": "JS Variables and Data Types", "duration": "18:00" },
                { "title": "Functions and Scope", "duration": "25:30" },
                { "title": "Arrays and Objects", "duration": "22:15" },
                { "title": "Control Flow & Loops", "duration": "20:00" },
                { "title": "DOM Manipulation", "duration": "30:45" },
                { "title": "Event Listeners", "duration": "18:15" },
                { "title": "Asynchronous JS", "duration": "25:15" },
                { "title": "Project: Simple Calculator", "duration": "19:00" }
            ]
        },
        {
            "title": "5. Backend with Node.js",
            "totalTime": "4h",
            "lectures": [
                { "title": "Node.js Architecture", "duration": "15:00" },
                { "title": "NPM and Modules", "duration": "12:30" },
                { "title": "Express Framework Setup", "duration": "20:45" },
                { "title": "Routing and Middleware", "duration": "35:00" },
                { "title": "REST API Design", "duration": "45:15" },
                { "title": "Authentication with JWT", "duration": "55:30" },
                { "title": "Error Handling", "duration": "25:00" },
                { "title": "Environment Variables", "duration": "11:00" }
            ]
        },
        {
            "title": "6. Working with Databases",
            "totalTime": "2h",
            "lectures": [
                { "title": "SQL vs NoSQL", "duration": "15:00" },
                { "title": "MongoDB Atlas Setup", "duration": "12:45" },
                { "title": "Mongoose Models", "duration": "22:30" },
                { "title": "CRUD Operations", "duration": "45:45" },
                { "title": "Database Relationships", "duration": "24:00" }
            ]
        },
        {
            "title": "7. Building Real-world Projects",
            "totalTime": "4h",
            "lectures": [
                { "title": "Project Planning & UX", "duration": "30:00" },
                { "title": "Frontend Implementation", "duration": "1:15:00" },
                { "title": "Backend Integration", "duration": "1:30:00" },
                { "title": "Testing and Debugging", "duration": "30:00" },
                { "title": "Optimizing Performance", "duration": "15:00" }
            ]
        },
        {
            "title": "8. Deployment & Final Project",
            "totalTime": "1h",
            "lectures": [
                { "title": "Preparing for Production", "duration": "25:00" },
                { "title": "Deploying to Vercel", "duration": "35:00" }
            ]
        }
    ]

};


const CourseDetailsPage = async ({ params }) => {

    const { id } = await params;
    const courses = await getCourses();
    const courseData = courses.find(course => course.id === Number(id));
    console.log('courseData: ', courseData);

    const courseCurriculum = await getCourseCurriculum();
    const courseCurriculumData = courseCurriculum.find(curr => curr.id === Number(id));
    console.log('courseCurriculumData: ', courseCurriculumData);

    return (

        <div className="max-w-350 mx-auto py-20 text-text-primary">
            {
                courseData ? (
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
                ) : (<div>loading...</div>)
            }

        </div>
    )
}

export default CourseDetailsPage

export async function generateStaticParams() {
    const courses = await getCourses();
    return courses.map(course => ({
        id: course.id.toString(),
    }));
}