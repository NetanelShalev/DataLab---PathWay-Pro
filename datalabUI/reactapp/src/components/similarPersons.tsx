import React from 'react';
import Person from './person';
import styled from 'styled-components';

const SimilarPersonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.3rem;
`;

interface PersonData {
    name: string;
    imageUrl: string;
    url?: string;
}

interface SimilarPersonsProps {
    persons: PersonData[];
}

const SimilarPersons: React.FC<SimilarPersonsProps> = ({ persons }) => {
    return (
        <div>
            <h3>Recommended people to talk with</h3>
            <SimilarPersonsContainer>
                {persons.map((person, index) => (
                    <Person key={index} name={person.name} imageUrl={person.imageUrl} url={person.url} />
                ))}
            </SimilarPersonsContainer>
        </div>
    );
};

export default SimilarPersons;
