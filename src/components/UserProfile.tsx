
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Download, Share, Plus, Edit, Trash2, Star, Heart, Mail, Phone, MapPin, Calendar } from "lucide-react";

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
      status: "Complete",
      downloads: 12
    },
    {
      id: 2,
      title: "Frontend Developer Resume",
      template: "Professional",
      createdAt: "2024-01-10",
      status: "Draft",
      downloads: 5
    },
    {
      id: 3,
      title: "Full Stack Resume",
      template: "Creative",
      createdAt: "2024-01-05",
      status: "Complete",
      downloads: 8
    }
  ]);

  const [favoriteTemplates] = useState([
    { id: 1, name: "Modern Professional", category: "Modern", likes: 245 },
    { id: 2, name: "Creative Designer", category: "Creative", likes: 189 },
    { id: 3, name: "Executive Classic", category: "Professional", likes: 156 }
  ]);

  const [certifications] = useState([
    { name: "AWS Solutions Architect", issuer: "Amazon", date: "2023-12", verified: true },
    { name: "React Developer Certification", issuer: "Meta", date: "2023-10", verified: true },
    { name: "Google Cloud Professional", issuer: "Google", date: "2023-08", verified: false }
  ]);

  const userInfo = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    joinDate: "January 2024",
    profileCompletion: 85
  };

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
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white h-12 px-6"
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
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                    <AvatarFallback className="bg-violet-100 text-violet-600 text-2xl font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{userInfo.name}</h2>
                    <p className="text-slate-600 mb-4">{userInfo.title}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        {userInfo.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        {userInfo.phone}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {userInfo.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Member since {userInfo.joinDate}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 lg:text-right">
                  <div className="flex flex-wrap gap-3 mb-4">
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
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-600">Profile Completion</span>
                      <span className="text-sm font-semibold text-slate-800">{userInfo.profileCompletion}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${userInfo.profileCompletion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="border-violet-200 text-violet-600 hover:bg-violet-50 h-12 px-6">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="resumes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-violet-50 mb-8">
              <TabsTrigger value="resumes" className="data-[state=active]:bg-white">
                My Resumes
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-white">
                Favorite Templates
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-white">
                Certifications
              </TabsTrigger>
            </TabsList>

            {/* Resumes Tab */}
            <TabsContent value="resumes">
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-violet-600" />
                    My Resumes ({resumes.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {resumes.map((resume) => (
                      <div 
                        key={resume.id}
                        className="flex items-center justify-between p-6 border border-violet-100 rounded-xl hover:bg-violet-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">{resume.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <span>Template: {resume.template}</span>
                              <span>•</span>
                              <span>Created: {resume.createdAt}</span>
                              <span>•</span>
                              <span>{resume.downloads} downloads</span>
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
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600 h-10 px-4">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600 h-10 px-4">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline" className="border-violet-200 text-violet-600 h-10 px-4">
                            <Share className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-200 text-red-600 h-10 px-4">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Favorite Templates Tab */}
            <TabsContent value="templates">
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-violet-600" />
                    Favorite Templates ({favoriteTemplates.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteTemplates.map((template) => (
                      <div key={template.id} className="border border-violet-100 rounded-xl p-6 hover:shadow-lg transition-all group">
                        <div className="w-full h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-violet-600" />
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2">{template.name}</h3>
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <span>{template.category}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-violet-500 mr-1" />
                            <span>{template.likes}</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full mt-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white h-10"
                        >
                          Use Template
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <Card className="border-violet-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-slate-800">
                      Certifications ({certifications.length})
                    </CardTitle>
                    <Button 
                      variant="outline" 
                      className="border-violet-200 text-violet-600 hover:bg-violet-50 h-10 px-4"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Certification
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-6 border border-violet-100 rounded-xl hover:bg-violet-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold text-slate-800">{cert.name}</h4>
                              {cert.verified && (
                                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-slate-600 mb-1">{cert.issuer}</p>
                            <p className="text-sm text-violet-600">Issued: {cert.date}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-violet-200 text-violet-600 h-8 px-3">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-200 text-red-600 h-8 px-3">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
