
import React from 'react';
import WorkExperienceItem from '@/components/WorkExperienceItem';
import { WorkExperience } from '@/data/workExperiences';

type WorkExperienceListProps = {
  experiences: WorkExperience[];
};

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ experiences }) => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          title={experience.title}
          company={experience.company}
          period={experience.period}
          location={experience.location}
          achievements={experience.achievements}
        />
      ))}
    </div>
  );
};

export default WorkExperienceList;
