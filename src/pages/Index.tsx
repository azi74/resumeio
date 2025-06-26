
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share, Users, Star, Zap, Check } from "lucide-react";
import ResumeBuilder from "@/components/ResumeBuilder";
import UserProfile from "@/components/UserProfile";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [activeView, setActiveView] = useState<"home" | "builder" | "profile">("home");
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ATS-Optimized Templates",
      description: "6 professional templates designed to pass ATS systems"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Multiple Formats",
      description: "Download in PDF, DOC, or DOCX formats"
    },
    {
      icon: <Share className="w-6 h-6" />,
      title: "Easy Sharing",
      description: "Share your resume on LinkedIn, WhatsApp, and more"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Profiles",
      description: "Save and manage multiple resumes in your profile"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "High ATS Score",
      description: "Optimized for applicant tracking systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Creation",
      description: "Build your resume in minutes with our guided form"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "1 resume template",
        "Basic ATS optimization",
        "PDF download",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: [
        "6 premium templates",
        "Advanced ATS optimization",
        "PDF, DOC, DOCX downloads",
        "Social media sharing",
        "Priority support",
        "Multiple resumes"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "per month",
      features: [
        "All Pro features",
        "Custom templates",
        "Team collaboration",
        "Analytics dashboard",
        "White-label solution",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  if (activeView === "builder") {
    return <ResumeBuilder onBack={() => setActiveView("home")} />;
  }

  if (activeView === "profile") {
    return <UserProfile onBack={() => setActiveView("home")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-violet-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800">resume.io</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-slate-600 hover:text-violet-600">
              About
            </Button>
            <Button variant="ghost" className="text-slate-600 hover:text-violet-600">
              Help
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveView("profile")}
                  className="border-violet-200 text-violet-600 hover:bg-violet-50 h-12 px-6"
                >
                  Profile
                </Button>
                <Button 
                  onClick={() => setActiveView("builder")}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-12 px-6"
                >
                  Create Resume
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-12 px-6"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200 transition-colors">
            ✨ High ATS Score Guaranteed
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Create Your Perfect
            <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent"> ATS-Optimized </span>
            Resume
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Build professional resumes that pass applicant tracking systems and land you interviews. 
            Choose from 6 expertly designed templates and download in multiple formats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={isLoggedIn ? () => setActiveView("builder") : () => setShowAuth(true)}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg h-14"
            >
              Start Building Free
              <FileText className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free Templates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ATS Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our resume builder is packed with features to help you create the perfect resume
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-violet-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg group bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select the perfect plan for your resume building needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-violet-100 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-violet-500 shadow-lg transform scale-105' : 'hover:border-violet-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    <span className="text-slate-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full h-12 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white' 
                      : 'border-violet-200 text-violet-600 hover:bg-violet-50'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => setShowAuth(true)}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your Perfect Resume?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed interviews with our ATS-optimized resumes
            </p>
            <Button 
              size="lg"
              onClick={isLoggedIn ? () => setActiveView("builder") : () => setShowAuth(true)}
              className="bg-white text-violet-600 hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold h-14"
            >
              Create Your Resume Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">resume.io</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Create professional, ATS-optimized resumes that help you land your dream job.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ATS Scanner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 resume.io. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)}
        onLogin={() => {
          setIsLoggedIn(true);
          setShowAuth(false);
        }}
      />
    </div>
  );
};

export default Index;
