
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import WorkExperienceList from '@/components/resume/work-history/WorkExperienceList';
import { workExperiences } from '@/data/workExperiences';

const WorkHistory = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="WORK HISTORY" />
      <WorkExperienceList experiences={workExperiences} />
    </div>
  );
};

export default WorkHistory;
