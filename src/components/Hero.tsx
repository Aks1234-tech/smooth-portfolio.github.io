import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  };

  const contactInfo = {
    email: 'sharmaashwani12455@gmail.com',
    phone: '+91 8619994516',
    location: 'Udaipur, Rajasthan, India',
    linkedin: 'https://www.linkedin.com/in/ashwani-kumar-sharma-119610250',
    github: 'https://github.com/Aks1234-tech',
  };

  return (
    <section id="home" className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden perspective">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-lg floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-glow/20 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Ashwani Kumar</span>
                <br />
                <span className="text-foreground">Sharma</span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-primary-glow font-light">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground">
                  B.Tech in Computer Science | AI/ML Enthusiast
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate software engineer with expertise in machine learning, deep learning, IoT, and cybersecurity. 
              Currently interning at AI/ML Research Intern at ResAiShala Technocrats Private Limited, 
              developing cutting-edge applications and research methodologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="glow-effect bg-primary hover:bg-primary-deep text-primary-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
              
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect border-glass-border hover:border-primary transition-smooth"
                  onClick={() => window.open(contactInfo.github, '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect border-glass-border hover:border-primary transition-smooth"
                  onClick={() => window.open(contactInfo.linkedin, '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image with 3D Effect */}
          <div className="relative slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Main Image Container */}
              <div className="relative card-3d rounded-full p-2 preserve-3d">
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src={profileAvatar}
                    alt="Ashwani Kumar Sharma"
                    className="w-full h-full object-cover rounded-full transition-3d hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-md floating-animation"></div>
              <div className="absolute -bottom-8 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-lg floating-animation" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-smooth group"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-3d" />
        </button>
      </div>
    </section>
  );
}