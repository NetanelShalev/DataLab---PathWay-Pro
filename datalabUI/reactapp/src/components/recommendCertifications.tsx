import React from 'react';
import Certification from './certification';
import { IconType } from 'react-icons';

interface CertificationData {
    name: string;
    icon: IconType;
}

interface RecommendCertificationsProps {
    certifications: CertificationData[];
}

const RecommendCertifications: React.FC<RecommendCertificationsProps> = ({ certifications }) => {
    return (
        <div className="recommend-certifications">
            Certifications
            <ul className="certifications-list">
                {certifications.map((certification, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <Certification 
                            name={certification.name}
                            icon={certification.icon}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendCertifications;
