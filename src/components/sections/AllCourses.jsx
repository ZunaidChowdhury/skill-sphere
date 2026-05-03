'use client'

import ErrorMessage from '@/components/ErrorMessage'
import CourseCard from '@/components/cards/CourseCard'
import React, { startTransition, use, useEffect, useMemo, useState, useTransition } from 'react'

const AllCourses = ({ courses }) => {

    // searching
    const [query, setQuery] = useState('')
    const [isPending, startTransition] = useTransition()
    const [filterText, setFilterText] = useState('')
    const [searchList, setSearchList] = useState(false);

    // searching
    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)
        startTransition(() => {
            setFilterText(value) // triggers usememo
        })
    }

    const searchedList = useMemo(() => {
        if (!filterText.trim()) return courses
        setSearchList(true)
        const searchLower = filterText.toLowerCase()    // cream

        return courses.filter((course) =>
            course.title.toLowerCase().includes(searchLower) // cream
        )
    }, [filterText])

    return (
        <div>
            {/* search box */}
            <div className='flex justify-end mt-6'>
                <div
                    className="flex  items-center w-full mt-3 md:mt-0 md:max-w-75 h-11 border border-[#e4e4e7FF] rounded-sm p-4 focus-within:border-theme-primary transition-all duration-300"
                >
                    {/* Search Icon */}
                    <svg
                        className="w-6 h-6 text-text-secondary mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>

                    {/* Input Field */}
                    <input
                        value={query}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search courses..."
                        className="w-full text-lg font-normal border-none focus:outline-none text-text-primary placeholder-text-secondary"
                    />
                </div>
            </div>

            {/* content  */}
            <div className=' grid grid-cols-3 gap-8 pt-10'>
                {/* card */}
                {
                    searchList ? searchedList.map(course => <CourseCard key={course.id} course={course} />) :
                        courses.map(course => <CourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    )
}

export default AllCourses