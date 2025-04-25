import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SkillPill from '@/components/SkillPill';
import SectionHeader from '@/components/SectionHeader';
import WorkExperienceItem from '@/components/WorkExperienceItem';
import SkillRating from '@/components/SkillRating';
import { FileText } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-resume-light-bg min-h-screen">
      {/* Header */}
      <div className="bg-resume-orange text-white p-6 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-white rounded-md">
              <span className="font-bold text-xl">J|P</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">JOHAN POTGIETER</h1>
              <p className="opacity-90">Director of Sales & Operations | National Sales Operations Manager</p>
              <p className="text-sm opacity-80">Nationality: South African | Driver's License: Code 08</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6">
        {/* Summary */}
        <div className="mb-8">
          <p className="text-sm">
            Dynamic and results-driven professional with extensive experience in sales leadership, retail 
            management, operations, and customer relationship management. Proven track record of driving 
            revenue growth, optimizing operational efficiencies, and leading high-performing teams across 
            diverse industries. Adept at strategic planning, stakeholder collaboration, and financial oversight. 
            Passionate about leveraging my skills to contribute to a forward-thinking organization like MIA, 
            known for its sustainable practices and innovative approach.
          </p>
        </div>

        {/* Two-column layout for desktop */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="md:w-2/3">
            {/* Skills */}
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

            {/* Work History */}
            <div className="mb-8">
              <SectionHeader title="WORK HISTORY" />
              
              <WorkExperienceItem
                title="CANNABIS KIOSK"
                company="General Manager"
                period="JULY 2022 - CURRENT"
                achievements={[
                  "Conducted and implemented comprehensive HR and IT systems, including recruitment protocols, detailed job descriptions",
                  "Designed and facilitated training programs with step-by-step visual instruction processes to ensure operational consistency",
                  "Directed employee recruitment and management, including interviews, onboarding, and performance assessments",
                  "Authored and enforced a detailed loss prevention protocol with strategic inventory processing to minimize shrinkage",
                  "Designed collaborative customer engagement programs focusing on product knowledge and advanced retail techniques for shopper assessments and loyalty",
                  "Streamlined cash handling procedures for operational efficiency and financial accuracy",
                  "Worked with PR in product development and ongoing supplier relations",
                  "Conducted market research for brand-new category for CBD retailer in South Africa",
                  "Created engaging promotional materials for both digital and print advertising, highlighting products and CBD benefits and alternative remedies",
                  "Coordinated high-impact marketing events for brand awareness in Johannesburg, Cape Town, Pretoria, Durban, and expo halls across South Africa",
                  "Designed and implemented Magento e-commerce platform, achieving measurable growth despite initial technical constraints",
                  "Researched and implemented cutting-edge POS systems to enhance customer experience and streamline operations",
                  "Conducted ongoing product education to ensure alignment with market trends and customer expectations",
                  "Performed comprehensive annual staff performance reviews, establishing improvement benchmarks",
                  "Authored and curated ongoing marketing efforts to enhance the retail experience and build loyal customer following"
                ]}
              />

              <WorkExperienceItem
                title="NATIONAL SALES & OPERATIONS MANAGER"
                company="TOYS R US | KRAFT 2020"
                period="MAY 2018 - JULY 2022"
                achievements={[
                  "Led retail performance and store management, including staff training and product merchandising",
                  "Developed HR systems and on-boarding processes to standardize recruitment and training",
                  "Implemented staff relationships management and provided actionable feedback to promote professional development",
                  "Served leadership role in project management, including designing and confirming workflows for South African CBD market",
                  "Provided strategic input for retail African CBD market expansion, optimizing digital and retail engagement and brand visibility",
                  "Collaborated closely with development directors to innovate eCommerce and digital engagement platforms",
                  "Spearheaded marketing events and campaigns at shopping centers, nationwide rollout and customer surveys"
                ]}
              />

              <WorkExperienceItem
                title="DEPARTMENT HEAD | V&A WATERFRONT"
                company="Cotton On"
                period="DECEMBER 2015 - JUNE 2017"
                achievements={[
                  "Managed recruitment, training, and performance assessments",
                  "Oversaw budget and expense management, ensuring profitability and cost control",
                  "Facilitated stock control, pricing, and compliance with company standards",
                  "Boosted sales by implementing innovative promotional displays and events"
                ]}
              />

              <WorkExperienceItem
                title="GENERAL MANAGER | LONG STREET"
                company="Tiger's Milk"
                period="JULY 2015 - NOVEMBER 2015"
                achievements={[
                  "Managed 85 staff for successful launch of the Long Street location",
                  "Anchored onboard all staff, promoting a culture of excellence",
                  "Spearheaded marketing initiatives and event planning to generate customer interest",
                  "Improved operational efficiency through streamlined procedures and training"
                ]}
              />

              <WorkExperienceItem
                title="FREELANCE PROJECT MANAGER"
                company="Self-Employed"
                period="DECEMBER 2013 - JUNE 2015"
                achievements={[
                  "Delivered tailored project management solutions for clients across various industries",
                  "Conceptualized and implemented the brand for Team's 'Best Pizza' restaurant and becoming a complete business foundation for flawless operations"
                ]}
              />

              <WorkExperienceItem
                title="MEZEPOLI MODERN GREEK RESTAURANTS"
                company="Kibou Group"
                period="NOVEMBER 2012 - DECEMBER 2013"
                achievements={[
                  "Reduced shrinkage by 76% through stringent stock control measures",
                  "Developed managerial staff for one of Cape Town's Top 10 Restaurants",
                  "Streamlined operational procedures, increasing profit and time availability"
                ]}
              />

              <WorkExperienceItem
                title="SALES MANAGER / PARTNER"
                company="Key Cut Communications"
                period="MAY 2011 - SEPTEMBER 2012"
                achievements={[
                  "Led strategic sales initiatives, achieving significant revenue growth",
                  "Planned, created and developed promotional campaigns, enhancing market share"
                ]}
              />

              <WorkExperienceItem
                title="TECHNICAL SALES CONSULTANT"
                company="Centurion Systems"
                period="FEBRUARY 2009 - APRIL 2010"
                achievements={[
                  "Negotiated a landmark contract with the National Secret Service for high-tech security solutions",
                  "Conducted training and product launches, earning recognition as a top sales professional",
                  "Provided expert technical support, improving customer satisfaction"
                ]}
              />

              <WorkExperienceItem
                title="REGIONAL OPERATIONS MANAGER & NATIONAL PROJECT MANAGER, MEGA STORE"
                company="Media Markt Factory Stores"
                period="MARCH 2004 - NOVEMBER 2008"
                achievements={[
                  "Oversaw operations across multiple African regions, managing a team of 222 employees",
                  "Implemented JIT inventory system that reduced costs while maintaining optimal stock levels",
                  "Spearheaded expansion projects, increasing store footprint by 30%"
                ]}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3">
            {/* Education */}
            <div className="mb-8">
              <SectionHeader title="EDUCATION" />
              <p className="mb-1"><span className="font-semibold">High School Diploma:</span> English, Afrikaans, Mathematics, Biology, Accounting, Science</p>
              <p><span className="font-semibold">Trade:</span> Professional Sales Qualification</p>
            </div>

            {/* Certificates Button */}
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
            
            {/* Remove the redundant Certifications & Training section */}
            
            {/* Accomplishments */}
            <div className="mb-8">
              <SectionHeader title="ACCOMPLISHMENTS" />
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Increased sales by 90% at Media Markt Factory Stores, managing 222 employees across 5 regions</li>
                <li>Only manager in Centurion who achieved double-digit sales increases every quarter - business success stories wanted with company-team resolution</li>
                <li>Secured a high-value Netbank Parts Contract through strategic proposal development and negotiations with technical teams for a feature release</li>
                <li>Reduced shrinkage by 75% at Mezepoli through targeted technical solutions and increased profitability</li>
              </ul>
            </div>
            
            {/* Software */}
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
            
            {/* Languages */}
            <div className="mb-8">
              <SectionHeader title="LANGUAGES" />
              <SkillRating skill="English" rating={5} />
              <SkillRating skill="Afrikaans" rating={5} />
            </div>
            
            {/* Interests */}
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
        </div>
      </div>
    </div>
  );
};

export default Index;
