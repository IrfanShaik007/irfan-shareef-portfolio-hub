
import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Download, ExternalLink, Menu, X, User, Briefcase, Code, Wrench, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
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
      title: "Message Sent!",
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
      github: 'https://github.com/IrfanShaik007'
    },
    {
      title: 'Sales Data Pipeline',
      description: 'Simulated a sales data warehouse using Apache Airflow, DBT, and Snowflake. Includes SQL-based metric analysis and BI tool dashboards.',
      tech: ['Apache Airflow', 'DBT', 'Snowflake', 'SQL'],
      github: 'https://github.com/IrfanShaik007'
    }
  ];

  const services = [
    {
      title: 'Machine Learning Model Development',
      description: 'Building and deploying ML models for classification, regression, and NLP tasks.',
      icon: '🤖'
    },
    {
      title: 'Data Pipeline Engineering',
      description: 'Designing and implementing scalable data pipelines and ETL processes.',
      icon: '⚡'
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Creating responsive web applications with modern frameworks and databases.',
      icon: '🌐'
    },
    {
      title: 'Data Visualization & Analytics',
      description: 'Building interactive dashboards and conducting comprehensive data analysis.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Shaik Irfan Shareef</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shaik Irfan Shareef
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 mb-6 font-medium">
                AI & Data Science Enthusiast | Machine Learning | Data Engineering
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate about building practical machine learning and data engineering solutions. 
                Hands-on with web platforms, pipelines, and collaborative development.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/irfan-shareef-shaik" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/IrfanShaik007" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI and Data Science student passionate about building practical machine learning and data engineering solutions. 
              Hands-on with web platforms, pipelines, and collaborative development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎓 Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science (AI & DS)</h4>
                  <p className="text-gray-600">Vishnu Institute of Technology</p>
                  <p className="text-sm text-gray-500">2022–2026 | CGPA: 8.95</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Intermediate (MPC)</h4>
                  <p className="text-gray-600">NRI Junior College, Tenali</p>
                  <p className="text-sm text-gray-500">2020–2022 | Marks: 962/1000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏆 Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary" className="mr-2 mb-2">Spark Tank Participant</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">GDSC Hackathon</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">SIH Participant</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">LeetCode Solver</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">GFG Contributor</Badge>
                <Badge variant="secondary" className="mr-2 mb-2">HackerRank</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">AI Intern</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">Academor (Remote)</CardDescription>
                </div>
                <Badge>Aug 2023 – Oct 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Built ML classification models for real-world applications</li>
                <li>• Performed NLP, EDA, and sentiment analysis using Python and Scikit-learn</li>
                <li>• Utilized Google Colab for collaborative development and model training</li>
                <li>• Delivered comprehensive analysis reports and model documentation</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Scikit-learn</Badge>
                <Badge variant="outline">NLP</Badge>
                <Badge variant="outline">Google Colab</Badge>
                <Badge variant="outline">Machine Learning</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <a 
                      href={project.github}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="capitalize text-lg">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="hover:bg-blue-100">
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
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-lg text-gray-600">What I can help you with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Let's discuss your next project</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <a href="mailto:IrfanShareefs067@gmail.com" className="text-gray-700 hover:text-blue-600">
                    IrfanShareefs067@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <a href="tel:+919676503365" className="text-gray-700 hover:text-blue-600">
                    +91-9676503365
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-600" size={20} />
                  <a 
                    href="https://linkedin.com/in/irfan-shareef-shaik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    linkedin.com/in/irfan-shareef-shaik
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-blue-600" size={20} />
                  <a 
                    href="https://github.com/IrfanShaik007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    github.com/IrfanShaik007
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Shaik Irfan Shareef. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
