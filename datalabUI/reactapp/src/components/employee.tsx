import React from 'react';
import styled from 'styled-components';

interface EmployeeProps {
    name: string;
    company: string;
    jobTitle: string;
    degreeLevel: string;
    degreeType: string;
}

const EmployeeContainer = styled.div`
    justify-content: center;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.7rem;
`;

const Employee: React.FC<EmployeeProps> = ({ name, company, jobTitle, degreeLevel, degreeType }) => {
    return (
        <EmployeeContainer> 
            <h3>Hello {name}!</h3>
            <p>{jobTitle} @ {company} </p>
            <p>{degreeLevel} in {degreeType}</p>
        </EmployeeContainer>
    );
};

export default Employee;
