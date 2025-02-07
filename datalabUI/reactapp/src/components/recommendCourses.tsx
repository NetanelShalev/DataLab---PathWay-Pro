import React from 'react';
import Course from './course';
import { IconType } from 'react-icons';

export type CourseData = {
    name: string;
    icon: IconType;
}

interface RecommendCoursesProps {
    courses: CourseData[];
}

const RecommendCourses: React.FC<RecommendCoursesProps> = ({ courses }) => {
    return (
        <div className="recommend-courses">
            Courses
            <ul className="courses-list">
                {courses.map((course, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <Course 
                            name={course.name}
                            icon={course.icon}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendCourses;
