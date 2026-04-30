export const getCourses = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/coursesData.json`);
    const courses = await res.json();
    return courses;
}