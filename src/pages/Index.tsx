import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FileText, Download, Share, Users, Star, Zap, Check, Upload, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import ResumeBuilder from "@/components/ResumeBuilder";
import UserProfile from "@/components/UserProfile";
import AuthModal from "@/components/AuthModal";
import ATSScoreModal from "@/components/ATSScoreModal";
import MobileAuthBottomSheet from "@/components/MobileAuthBottomSheet";
import MobileATSBottomSheet from "@/components/MobileATSBottomSheet";

const Index = () => {
  const [activeView, setActiveView] = useState<"home" | "builder" | "profile">("home");
  const [showAuth, setShowAuth] = useState(false);
  const [showATSChecker, setShowATSChecker] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 w-full">
      {/* Header */}
      <header className={`border-b border-slate-200 bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <h1 className="text-lg md:text-xl font-bold text-slate-800 truncate">resume.io</h1>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            {isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveView("profile")}
                  className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 h-9 px-3 md:h-10 md:px-4 text-sm"
                >
                  Profile
                </Button>
                <Button 
                  onClick={() => setActiveView("builder")}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-9 px-3 md:h-10 md:px-4 text-sm"
                >
                  Create Resume
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-9 px-3 md:h-10 md:px-4 text-sm"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16 md:pt-20 w-full">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 md:mb-8 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-50 transition-colors text-sm md:text-base px-4 py-2">
              ✨ High ATS Score Guaranteed
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight">
              Create Your Perfect
              <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent block sm:inline"> ATS-Optimized </span>
              Resume
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              Build professional resumes that pass applicant tracking systems and land you interviews. 
              Choose from 6 expertly designed templates and download in multiple formats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-lg sm:max-w-none mx-auto">
              <Button 
                size="lg"
                onClick={isLoggedIn ? () => setActiveView("builder") : () => setShowAuth(true)}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-4 md:px-8 md:py-6 text-lg md:text-xl h-14 md:h-16 w-full sm:w-auto font-semibold"
              >
                Start Building Free
                <FileText className="ml-3 w-5 h-5 md:w-6 md:h-6" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setShowATSChecker(true)}
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-4 md:px-8 md:py-6 text-lg md:text-xl h-14 md:h-16 w-full sm:w-auto font-semibold"
              >
                Check ATS Score
                <Upload className="ml-3 w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm md:text-base text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                <span>Free Templates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                <span>ATS Optimized</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Our resume builder is packed with features to help you create the perfect resume
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-slate-200 hover:border-violet-200 transition-all duration-300 hover:shadow-lg group bg-white"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-white group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 md:mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Select the perfect plan for your resume building needs
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-slate-200 bg-white transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-violet-500 shadow-lg md:transform md:scale-105' : 'hover:border-violet-200'
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
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
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

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-slate-200 bg-white transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-violet-500 shadow-lg' : 'hover:border-violet-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
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
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
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
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Ready to Build Your Perfect Resume?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 md:mb-10 max-w-3xl mx-auto">
                Join thousands of job seekers who have successfully landed interviews with our ATS-optimized resumes
              </p>
              <Button 
                size="lg"
                onClick={isLoggedIn ? () => setActiveView("builder") : () => setShowAuth(true)}
                className="bg-white text-violet-600 hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-xl font-semibold h-16"
              >
                Create Your Resume Now
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
            {/* Desktop Footer */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">resume.io</h3>
                  </div>
                  <p className="text-slate-400 mb-6 max-w-sm">
                    Create professional, ATS-optimized resumes that help you land your dream job. Fast, easy, and effective.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-white">Product</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">ATS Scanner</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Career Tips</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Interview Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-white">Contact</h4>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>support@resume.io</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>San Francisco, CA</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-400 text-sm mb-4 md:mb-0">
                  &copy; 2024 resume.io. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-slate-400">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="md:hidden">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">resume.io</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                  Create professional, ATS-optimized resumes that help you land your dream job.
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-4 text-white">Product</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">ATS Scanner</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-white">Support</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-6 text-center">
                <p className="text-slate-400 text-xs mb-4">
                  &copy; 2024 resume.io. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 text-xs text-slate-400">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Auth Modal/Bottom Sheet */}
      {isMobile ? (
        <MobileAuthBottomSheet 
          isOpen={showAuth} 
          onClose={() => setShowAuth(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowAuth(false);
          }}
        />
      ) : (
        <AuthModal 
          isOpen={showAuth} 
          onClose={() => setShowAuth(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowAuth(false);
          }}
        />
      )}

      {/* ATS Score Modal/Bottom Sheet */}
      {isMobile ? (
        <MobileATSBottomSheet 
          isOpen={showATSChecker} 
          onClose={() => setShowATSChecker(false)}
        />
      ) : (
        <ATSScoreModal 
          isOpen={showATSChecker} 
          onClose={() => setShowATSChecker(false)}
        />
      )}
    </div>
  );
};

export default Index;
