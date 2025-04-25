
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import WorkExperienceItem from '@/components/WorkExperienceItem';

const WorkHistory = () => {
  return (
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
  );
};

export default WorkHistory;
