import React from 'react'

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    return (
        <div>Course: {id}</div>
    )
}

export default CourseDetailsPage