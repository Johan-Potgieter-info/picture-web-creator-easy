
import React from 'react';
import SkillPill from '@/components/SkillPill';
import SectionHeader from '@/components/SectionHeader';

const SkillsSection = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="SKILLS" />
      <div>
        <SkillPill>P&L Management</SkillPill>
        <SkillPill>Strong presentation skills</SkillPill>
        <SkillPill>Communication</SkillPill>
        <SkillPill>Stakeholder Management</SkillPill>
        <SkillPill>Client Relationships</SkillPill>
        <SkillPill>Systems Development</SkillPill>
        <SkillPill>Financial Planning</SkillPill>
        <SkillPill>Change Management</SkillPill>
        <SkillPill>Operations management</SkillPill>
        <SkillPill>Mentorship</SkillPill>
        <SkillPill>Project management</SkillPill>
      </div>
    </div>
  );
};

export default SkillsSection;
