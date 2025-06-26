
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download, Share, Plus, Edit, Trash2 } from "lucide-react";

interface UserProfileProps {
  onBack: () => void;
}

const UserProfile = ({ onBack }: UserProfileProps) => {
  const [resumes] = useState([
    {
      id: 1,
      title: "Software Engineer Resume",
      template: "Modern",
      createdAt: "2024-01-15",
      status: "Complete"
    },
    {
      id: 2,
      title: "Frontend Developer Resume",
      template: "Professional",
      createdAt: "2024-01-10",
      status: "Draft"
    },
    {
      id: 3,
      title: "Full Stack Resume",
      template: "Creative",
      createdAt: "2024-01-05",
      status: "Complete"
    }
  ]);

  const [certifications] = useState([
    { name: "AWS Solutions Architect", issuer: "Amazon", date: "2023-12" },
    { name: "React Developer Certification", issuer: "Meta", date: "2023-10" },
    { name: "Google Cloud Professional", issuer: "Google", date: "2023-08" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-violet-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-slate-600 hover:text-violet-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="text-slate-400">|</div>
            <h1 className="text-xl font-semibold text-slate-800">My Profile</h1>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Resume
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8 border-violet-100 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                  <AvatarFallback className="bg-violet-100 text-violet-600 text-xl font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">John Doe</h2>
                  <p className="text-slate-600 mb-4">Senior Software Engineer</p>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      {resumes.length} Resumes
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      {certifications.length} Certifications
                    </Badge>
                    <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                      Premium Member
                    </Badge>
                  </div>
                </div>
                
                <Button variant="outline" className="border-violet-200 text-violet-600 hover:bg-violet-50">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Resumes */}
            <div className="lg:col-span-2">
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-violet-600" />
                    My Resumes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resumes.map((resume) => (
                      <div 
                        key={resume.id}
                        className="flex items-center justify-between p-4 border border-violet-100 rounded-xl hover:bg-violet-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">{resume.title}</h3>
                            <div className="flex items-center space-x-3 text-sm text-slate-500">
                              <span>Template: {resume.template}</span>
                              <span>•</span>
                              <span>Created: {resume.createdAt}</span>
                              <Badge 
                                variant={resume.status === "Complete" ? "default" : "secondary"}
                                className="ml-2"
                              >
                                {resume.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600">
                            <Share className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-200 text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Certifications */}
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-800">
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-3 border border-violet-100 rounded-lg">
                        <h4 className="font-medium text-slate-800 text-sm">{cert.name}</h4>
                        <p className="text-xs text-slate-500">{cert.issuer}</p>
                        <p className="text-xs text-violet-600">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-violet-200 text-violet-600 hover:bg-violet-50"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Certification
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-800">
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Downloads</span>
                      <span className="font-semibold text-slate-800">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Templates Used</span>
                      <span className="font-semibold text-slate-800">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Shares</span>
                      <span className="font-semibold text-slate-800">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Member Since</span>
                      <span className="font-semibold text-slate-800">Jan 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
