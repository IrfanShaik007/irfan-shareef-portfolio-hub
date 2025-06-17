import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Download, ExternalLink, Menu, X, User, Briefcase, Code, Wrench, MessageCircle, ChevronDown, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'AI & Data Science Enthusiast',
    'Machine Learning Engineer',
    'Data Engineering Specialist',
    'Full-Stack Developer'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (isTyping) {
      const timer = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        if (typedText.length === currentRole.length) {
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        if (typedText.length === 0) {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typedText, isTyping, currentRoleIndex, roles]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const skills = {
    languages: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NLTK'],
    platforms: ['Airflow', 'Snowflake', 'DBT', 'Firebase', 'AWS'],
    softSkills: ['Problem Solving', 'Teamwork', 'Communication']
  };

  const projects = [
    {
      title: 'EduSwap Platform',
      description: 'A student skill exchange web app built using React.js and Firebase with real-time features like authentication, posts, tags, and search.',
      tech: ['React.js', 'Firebase', 'JavaScript', 'CSS'],
      github: 'https://github.com/IrfanShaik007',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      title: 'Sales Data Pipeline',
      description: 'Simulated a sales data warehouse using Apache Airflow, DBT, and Snowflake. Includes SQL-based metric analysis and BI tool dashboards.',
      tech: ['Apache Airflow', 'DBT', 'Snowflake', 'SQL'],
      github: 'https://github.com/IrfanShaik007',
      gradient: 'from-green-400 to-blue-600'
    }
  ];

  const services = [
    {
      title: 'Machine Learning Model Development',
      description: 'Building and deploying ML models for classification, regression, and NLP tasks.',
      icon: '🤖',
      gradient: 'from-pink-400 to-red-600'
    },
    {
      title: 'Data Pipeline Engineering',
      description: 'Designing and implementing scalable data pipelines and ETL processes.',
      icon: '⚡',
      gradient: 'from-yellow-400 to-orange-600'
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Creating responsive web applications with modern frameworks and databases.',
      icon: '🌐',
      gradient: 'from-green-400 to-teal-600'
    },
    {
      title: 'Data Visualization & Analytics',
      description: 'Building interactive dashboards and conducting comprehensive data analysis.',
      icon: '📊',
      gradient: 'from-purple-400 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shaik Irfan Shareef
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 relative group ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/90 backdrop-blur-xl border-t border-gray-200/50`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg w-full text-left ${
                  activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="inline mr-2" size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block">Shaik</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                    Irfan Shareef
                  </span>
                </h1>
                <div className="h-16">
                  <p className="text-xl sm:text-2xl text-blue-600 font-medium">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about building practical machine learning and data engineering solutions. 
                Hands-on with web platforms, pipelines, and collaborative development.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/uc?export=download&id=1FF9WBjoNj642mgbskIyl-WIuXg02Iz9c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex space-x-6">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/irfan-shareef-shaik", color: "hover:text-blue-600" },
                  { icon: Github, href: "https://github.com/IrfanShaik007", color: "hover:text-gray-900" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`text-gray-600 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-teal-500 p-1 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <img 
                      src="https://i.postimg.cc/4dnP5dxV/irfan-new.jpg" 
                      alt="Shaik Irfan Shareef"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  AI
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                  <Sparkles size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI and Data Science student passionate about building practical machine learning and data engineering solutions. 
              Hands-on with web platforms, pipelines, and collaborative development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 group border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl group-hover:text-blue-600 transition-colors duration-300">
                  🎓 Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science (AI & DS)</h4>
                  <p className="text-gray-600">Vishnu Institute of Technology</p>
                  <p className="text-sm text-gray-500">2022–2026 | CGPA: 8.95</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 transition-all duration-300">
                  <h4 className="font-semibold text-lg">Intermediate (MPC)</h4>
                  <p className="text-gray-600">NRI Junior College, Tenali</p>
                  <p className="text-sm text-gray-500">2020–2022 | Marks: 962/1000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 group border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl group-hover:text-purple-600 transition-colors duration-300">
                  🏆 Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Spark Tank Participant', 'GDSC Hackathon', 'SIH Participant', 'LeetCode Solver', 'GFG Contributor', 'HackerRank'].map((achievement, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="mr-2 mb-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {achievement}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 border-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">AI Intern</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">Academor (Remote)</CardDescription>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                  Aug 2023 – Oct 2023
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-3 text-gray-700">
                {[
                  'Built ML classification models for real-world applications',
                  'Performed NLP, EDA, and sentiment analysis using Python and Scikit-learn',
                  'Utilized Google Colab for collaborative development and model training',
                  'Delivered comprehensive analysis reports and model documentation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="text-blue-600 group-hover/item:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Scikit-learn', 'NLP', 'Google Colab', 'Machine Learning'].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="hover:scale-105 transition-all duration-300 hover:bg-blue-100 hover:border-blue-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-on-scroll opacity-0 translate-y-8 border-0 bg-white relative overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center justify-between group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                    <a 
                      href={project.github}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="hover:scale-105 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 border-0 bg-white/80 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="capitalize text-lg group-hover:text-teal-600 transition-colors duration-300">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="hover:bg-teal-100 hover:border-teal-300 hover:scale-105 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600">What I can help you with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-on-scroll opacity-0 translate-y-8 border-0 bg-white relative overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="relative">
                  <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{service.icon}</div>
                  <CardTitle className="text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-gray-600">Let's discuss your next project</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, href: "mailto:IrfanShareefs067@gmail.com", text: "IrfanShareefs067@gmail.com", color: "text-red-600" },
                  { icon: Phone, href: "tel:+919676503365", text: "+91-9676503365", color: "text-green-600" },
                  { icon: Linkedin, href: "https://linkedin.com/in/irfan-shareef-shaik", text: "linkedin.com/in/irfan-shareef-shaik", color: "text-blue-600" },
                  { icon: Github, href: "https://github.com/IrfanShaik007", text: "github.com/IrfanShaik007", color: "text-gray-800" }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <contact.icon className={`${contact.color} group-hover:scale-125 transition-transform duration-300`} size={24} />
                    <a 
                      href={contact.href} 
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex-1"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-x-8 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="group">
                    <Input 
                      placeholder="Your Name" 
                      required 
                      className="border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="group">
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4} 
                      required 
                      className="border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-lg">&copy; 2024 Shaik Irfan Shareef. All rights reserved.</p>
          <p className="text-gray-300 mt-2">Built with ❤️ and cutting-edge technology</p>
        </div>
      </footer>

      <style>
        {`
          .animate-on-scroll.animate-in {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
