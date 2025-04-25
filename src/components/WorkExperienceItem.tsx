
import React from 'react';

type WorkExperienceItemProps = {
  title: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  achievements: string[];
};

const WorkExperienceItem = ({ 
  title, 
  company, 
  location, 
  period, 
  description, 
  achievements 
}: WorkExperienceItemProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold uppercase">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
        <span className="font-semibold">{company}</span>
        {location && <span className="text-sm text-gray-600">{location}</span>}
      </div>
      <div className="text-sm text-gray-500 mb-2">{period}</div>
      {description && <p className="mb-2 text-sm">{description}</p>}
      <ul className="list-disc pl-5 text-sm">
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-1">{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceItem;
