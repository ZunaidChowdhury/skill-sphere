'use client'

import Link from "next/link"
import { TbReload } from "react-icons/tb"
import { usePathname } from 'next/navigation'

const ErrorMessage = () => {
        const pathname = usePathname()
    return (
        <div className='pt-20'><div className="w-full max-w-350 mx-auto p-20 text-center bg-foreground rounded-lg shadow-sm border border-gray-100">

            {/* Clear, bold heading */}
            <h4 className="text-3xl font-semibold tracking-tight text-text-primary mb-3">
                Oops! Couldn't load the courses.
            </h4>

            {/* Simple, helpful subtext */}
            <p className="text-lg text-neutral-500 max-w-md mx-auto leading-tight mb-10 ">
                Try reloading the page.
            </p>
            <Link
                href={pathname}
                className="w-50 inline-flex items-center justify-center px-6 py-3 rounded-full bg-theme-primary text-white font-medium hover:bg-blue-700 transition-colors"
            >
                <TbReload className='w-6 h-5 mr-2' />
                Reload
            </Link>
        </div>
        </div>
    )
}

export default ErrorMessage