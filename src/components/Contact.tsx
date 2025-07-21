import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = {
  email: 'sharmaashwani12455@gmail.com',
  phone: '+91 8619994516',
  location: 'Udaipur, Rajasthan, India',
  linkedin: 'https://www.linkedin.com/in/ashwani-kumar-sharma-119610250',
  github: 'https://github.com/Aks1234-tech',
};

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: 'text-primary',
    bgColor: 'bg-primary/20'
  },
  {
    name: 'Phone',
    icon: Phone,
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    color: 'text-accent',
    bgColor: 'bg-accent/20'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    value: 'Connect on LinkedIn',
    href: contactInfo.linkedin,
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/20'
  },
  {
    name: 'GitHub',
    icon: Github,
    value: 'View GitHub Profile',
    href: contactInfo.github,
    color: 'text-accent-glow',
    bgColor: 'bg-accent-glow/20'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-44 h-44 bg-primary/30 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-accent/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities in tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-primary mr-3" />
                Get In Touch
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in 
                innovative technology solutions. Whether you have a project idea, want to discuss the latest in AI/ML, 
                or just want to chat about tech, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="card-3d rounded-xl p-4 glow-effect hover:scale-105 transition-3d block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${link.bgColor}`}>
                      <link.icon className={`h-6 w-6 ${link.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{link.name}</h4>
                      <p className="text-muted-foreground text-sm">{link.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location Card */}
            <div className="card-3d rounded-xl p-6 glow-effect">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Current Location</h4>
                  <p className="text-muted-foreground">{contactInfo.location}</p>
                  <p className="text-sm text-muted-foreground">
                    Available for remote collaboration worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="card-3d rounded-2xl p-8 glow-effect">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="glass-effect border-glass-border focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="glass-effect border-glass-border focus:border-primary transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    required
                    className="glass-effect border-glass-border focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="glass-effect border-glass-border focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-effect bg-primary hover:bg-primary-deep text-primary-foreground"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-3d rounded-2xl p-8 glow-effect max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a groundbreaking AI application, a blockchain solution, or an innovative IoT system, 
              let's turn your ideas into reality.
            </p>
            <Button
              size="lg"
              className="glow-effect bg-accent hover:bg-accent-glow text-accent-foreground"
              onClick={() => window.open(contactInfo.linkedin, '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}