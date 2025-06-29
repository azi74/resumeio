
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Code, Wrench } from "lucide-react";

interface SkillsFormProps {
  onDataChange: (data: any) => void;
  data: any;
}

const SkillsForm = ({ onDataChange, data }: SkillsFormProps) => {
  const [technicalSkills, setTechnicalSkills] = useState<string[]>(data.skills?.technical || []);
  const [softSkills, setSoftSkills] = useState<string[]>(data.skills?.soft || []);
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");

  useEffect(() => {
    onDataChange({
      technical: technicalSkills,
      soft: softSkills
    });
  }, [technicalSkills, softSkills, onDataChange]);

  const addTechnicalSkill = () => {
    if (newTechnicalSkill.trim() && !technicalSkills.includes(newTechnicalSkill.trim())) {
      setTechnicalSkills([...technicalSkills, newTechnicalSkill.trim()]);
      setNewTechnicalSkill("");
    }
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim() && !softSkills.includes(newSoftSkill.trim())) {
      setSoftSkills([...softSkills, newSoftSkill.trim()]);
      setNewSoftSkill("");
    }
  };

  const removeTechnicalSkill = (skill: string) => {
    setTechnicalSkills(technicalSkills.filter(s => s !== skill));
  };

  const removeSoftSkill = (skill: string) => {
    setSoftSkills(softSkills.filter(s => s !== skill));
  };

  const popularTechnicalSkills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "AWS", "Docker", "SQL", "Git", "HTML/CSS"
  ];

  const popularSoftSkills = [
    "Leadership", "Communication", "Problem Solving", "Team Collaboration", "Project Management", 
    "Critical Thinking", "Adaptability", "Time Management", "Creativity", "Mentoring"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Skills & Expertise
        </h2>
        <p className="text-slate-600">
          Showcase your technical and soft skills
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <Card className="border-violet-100 bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center ">
              <Code className="w-5 h-5 mr-2 text-violet-600" />
              Technical Skills
            </CardTitle>
            <p className="text-sm text-slate-600">Programming languages, frameworks, tools, etc.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input 
                value={newTechnicalSkill}
                onChange={(e) => setNewTechnicalSkill(e.target.value)}
                placeholder="Add a technical skill"
                className="border-violet-200 bg-white placeholder:text-slate-400 focus:border-violet-500"
                onKeyPress={(e) => e.key === 'Enter' && addTechnicalSkill()}
              />
              <Button 
                onClick={addTechnicalSkill}
                className="bg-violet-500 hover:bg-violet-600 text-white"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="bg-violet-100 h-8 text-violet-700 hover:bg-violet-200 pr-1"
                >
                  {skill}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTechnicalSkill(skill)}
                    className="ml-1 h-4 w-4 p-0 hover:bg-violet-300 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Popular technical skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularTechnicalSkills.map((skill) => (
                  <Button
                    key={skill}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (!technicalSkills.includes(skill)) {
                        setTechnicalSkills([...technicalSkills, skill]);
                      }
                    }}
                    className="border-violet-200 bg-white hover:text-black text-violet-600 hover:bg-violet-50 text-xs"
                    disabled={technicalSkills.includes(skill)}
                  >
                    + {skill}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="border-violet-100 bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-violet-600" />
              Soft Skills
            </CardTitle>
            <p className="text-sm text-slate-600">Interpersonal and professional skills</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input 
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                placeholder="Add a soft skill"
                className="border-violet-200 bg-white placeholder:text-slate-400 focus:border-violet-500"
                onKeyPress={(e) => e.key === 'Enter' && addSoftSkill()}
              />
              <Button 
                onClick={addSoftSkill}
                className="bg-violet-500 hover:bg-violet-600 text-white"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="bg-blue-100 h-8 text-blue-700 hover:bg-blue-200 pr-1"
                >
                  {skill}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSoftSkill(skill)}
                    className="ml-1 h-4 w-4 p-0 hover:bg-blue-300 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Popular soft skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularSoftSkills.map((skill) => (
                  <Button
                    key={skill}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (!softSkills.includes(skill)) {
                        setSoftSkills([...softSkills, skill]);
                      }
                    }}
                    className="border-blue-200 bg-white hover:text-blue-900 text-blue-600 hover:bg-blue-50 text-xs"
                    disabled={softSkills.includes(skill)}
                  >
                    + {skill}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillsForm;
