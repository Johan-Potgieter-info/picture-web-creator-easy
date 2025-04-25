
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import SkillRating from '@/components/SkillRating';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="md:w-1/3">
      <div className="mb-8">
        <SectionHeader title="EDUCATION" />
        <p className="mb-1"><span className="font-semibold">High School Diploma:</span> English, Afrikaans, Mathematics, Biology, Accounting, Science</p>
        <p><span className="font-semibold">Trade:</span> Professional Sales Qualification</p>
      </div>

      <div className="mb-8">
        <SectionHeader title="CERTIFICATES" />
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate('/certificates')}
        >
          <FileText className="mr-2" />
          View My Certificates
        </Button>
      </div>

      <div className="mb-8">
        <SectionHeader title="ACCOMPLISHMENTS" />
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Increased sales by 90% at Media Markt Factory Stores, managing 222 employees across 5 regions</li>
          <li>Only manager in Centurion who achieved double-digit sales increases every quarter - business success stories wanted with company-team resolution</li>
          <li>Secured a high-value Netbank Parts Contract through strategic proposal development and negotiations with technical teams for a feature release</li>
          <li>Reduced shrinkage by 75% at Mezepoli through targeted technical solutions and increased profitability</li>
        </ul>
      </div>

      <div className="mb-8">
        <SectionHeader title="SOFTWARE" />
        <SkillRating skill="Jira" rating={5} />
        <SkillRating skill="Google" rating={5} />
        <SkillRating skill="Confluence" rating={5} />
        <SkillRating skill="MS Office" rating={5} />
        <SkillRating skill="GitHub" rating={4} />
        <SkillRating skill="MS Excel" rating={5} />
        <SkillRating skill="JavaScript" rating={3} />
        <SkillRating skill="HubSpot" rating={3} />
        <SkillRating skill="Mail Chimp" rating={4} />
        <SkillRating skill="Figma" rating={3} />
        <SkillRating skill="Canva" rating={5} />
        <SkillRating skill="Gimp" rating={3} />
      </div>

      <div className="mb-8">
        <SectionHeader title="LANGUAGES" />
        <SkillRating skill="English" rating={5} />
        <SkillRating skill="Afrikaans" rating={5} />
      </div>

      <div className="mb-8">
        <SectionHeader title="INTERESTS" />
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Coding</li>
          <li>Motorbikes</li>
          <li>Engineering</li>
          <li>Space</li>
          <li>Gaming</li>
          <li>Biology</li>
          <li>Finance</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
