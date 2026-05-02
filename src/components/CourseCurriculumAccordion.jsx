'use client'
import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const CourseCurriculumAccordion = ({ curriculum }) => {



    // curriculum should be an array of sections, each with a lectures array
    // Example: [{ title: '1. Introduction', lectures: [{ title: '...', duration: '05:30' }] }]

    return (
        <div className="w-full mx-auto">
            {/* Header */}
            <div className="flex justify-between items-end mb-4 px-2">
                <h2 className="text-xl font-bold text-slate-900">Course curriculum</h2>
                <span className="text-sm text-slate-500">
                    8 sections • 42 lectures • 20h total length
                </span>
            </div>

            {/* Accordion Container */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                {curriculum.map((section, index) => (
                    <div
                        key={index}
                        className="collapse collapse-arrow bg-white border-b border-slate-200 last:border-b-0 rounded-none"
                    >
                        {/* DaisyUI uses a hidden checkbox for state-less accordion logic */}
                        <input type="checkbox" className="peer" defaultChecked={index === 0} />

                        {/* Section Title */}
                        <div className="collapse-title flex justify-between items-center pr-12 py-4 bg-slate-50/50 peer-checked:bg-white transition-colors">
                            <span className="font-bold text-slate-800">{section.title}</span>
                            <span className="text-sm text-slate-500 font-normal">
                                {section.lectures.length} lectures • {section.totalTime}
                            </span>
                        </div>

                        {/* Content Area */}
                        <div className="collapse-content bg-white p-0">
                            <div className="divide-y divide-slate-100 px-4">
                                {section.lectures.map((lecture, lIdx) => (
                                    <div
                                        key={lIdx}
                                        className="flex justify-between items-center py-4 group cursor-pointer hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <PlayCircle
                                                size={18}
                                                className="text-blue-600 group-hover:scale-110 transition-transform"
                                            />
                                            <span className="text-sm text-blue-600 font-medium">
                                                {lecture.title}
                                            </span>
                                        </div>
                                        <span className="text-sm text-slate-500 tabular-nums">
                                            {lecture.duration}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default CourseCurriculumAccordion;