import React from 'react';

interface PersonProps {
    name: string;
    imageUrl: string;
    url?: string;
}

const Person: React.FC<PersonProps> = ({ name, imageUrl, url }) => {
    return (
        <div style={{ textAlign: 'center', margin: '10px 20px 10px 20px' }}>
            <img
            src={imageUrl}
            alt={name}
            style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                objectFit: 'cover',
            }}
            />
            {url ? (
            <h3><a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{name}</a></h3>
            ) : (
            <h3>{name}</h3>
            )}
        </div>
    );
};

export default Person;