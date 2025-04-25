
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "Johan Potgieter Certificate",
      url: "https://papcczkpcofpmkbntbzd.supabase.co/storage/v1/object/public/cv-info/Certificate-JohanJacobus-Potgieter.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-resume-light-bg p-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-resume-text-dark mb-8">My Certificates</h1>
        <div className="grid gap-4">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2" />
                  {cert.name}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
