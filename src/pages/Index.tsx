
import React from 'react';
import Header from '@/components/resume/Header';
import Summary from '@/components/resume/Summary';
import SkillsSection from '@/components/resume/SkillsSection';
import WorkHistory from '@/components/resume/WorkHistory';
import Sidebar from '@/components/resume/Sidebar';

const Index = () => {
  return (
    <div className="bg-resume-light-bg min-h-screen">
      <Header />
      <div className="container mx-auto max-w-5xl p-4 sm:p-6">
        <Summary />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <SkillsSection />
            <WorkHistory />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
