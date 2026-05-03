export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCourses = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/coursesData.json`);
        if (!res.ok) {
            throw new Error(`Failed to fetch courses: ${res.status} ${res.statusText}`);
        }
        const courses = await res.json();
        return courses;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
}

export const getCourseCurriculum = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courseCurriculumData.json`);
        if (!res.ok) {
            throw new Error(`Failed to fetch course curriculum: ${res.status} ${res.statusText}`);
        }
        const courseCurriculum = await res.json();
        return courseCurriculum;
    } catch (error) {
        console.error('Error fetching course curriculum:', error);
        throw error;
    }
}