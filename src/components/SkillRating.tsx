
import React from 'react';

type SkillRatingProps = {
  skill: string;
  rating: number;
  maxRating?: number;
};

const SkillRating = ({ skill, rating, maxRating = 5 }: SkillRatingProps) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm">{skill}</span>
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 ml-1 rounded-full ${i < rating ? 'bg-resume-icon-orange' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillRating;
