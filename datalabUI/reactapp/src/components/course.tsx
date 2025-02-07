import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface CourseProps {
    name: string;
    icon: IconType;
}

const CourseContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    border: 2px solid #2e1393;
    margin: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #eaeaea;
        transform: scale(1.05);
    }
`;

const CourseLogo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#dce6f1;`;

const CourseName = styled.h3`
    margin: 0;
    font-size: 1.4rem;
    color: #2e1393;
    font-weight: bold;
`;

const Course: React.FC<CourseProps> = ({ name, icon }) => {
        return (
        <CourseContainer>
            <CourseLogo>
            {icon && React.createElement(icon, { size: 30 })}
            </CourseLogo>
            <CourseName>{name}</CourseName>
        </CourseContainer>
    );
};

export default Course;