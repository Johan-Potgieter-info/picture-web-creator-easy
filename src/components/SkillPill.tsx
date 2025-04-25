
import React from 'react';

type SkillPillProps = {
  children: React.ReactNode;
};

const SkillPill = ({ children }: SkillPillProps) => {
  return (
    <div className="border border-resume-orange text-resume-text-dark rounded-full px-3 py-1 text-sm inline-block mr-2 mb-2">
      {children}
    </div>
  );
};

export default SkillPill;
