import { ExternalLink, Github, Calendar, Code, Award, Database, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'False Data Injection Attack Detection System',
    description: 'Built an ML model to detect false data injection in smart grids, enhancing data integrity and system security.',
    tech: ['Machine Learning', 'Python', 'Data Analysis', 'Cybersecurity'],
    category: 'Machine Learning',
    icon: Database,
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    date: 'Feb 2025 – Present',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Blockchain-based E-Waste Management System',
    description: 'Developed a decentralized platform using Ethereum, Solidity, Web3.js, MetaMask, and IPFS for secure e-waste tracking, incentivization, and compliance.',
    tech: ['Blockchain', 'Solidity', 'Web3.js', 'Ethereum', 'MetaMask', 'IPFS'],
    category: 'Blockchain',
    icon: Code,
    color: 'text-accent-glow',
    bgColor: 'bg-accent-glow/20',
    date: 'Nov 2024',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Network Intrusion Detection System',
    description: 'Designed a hybrid ensemble ML system for anomaly detection to safeguard network traffic against cyber-attacks.',
    tech: ['Machine Learning', 'Python', 'Ensemble Methods', 'Cybersecurity'],
    category: 'AI/ML Research',
    icon: Award,
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/20',
    date: 'Dec 2024',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Smart Solar Tracker System (SIH Winner Project)',
    description: 'Created a solar tracking system using MATLAB Simulink, with a MATLAB app and Android app for real-time, location-based monitoring. Integrated ThingSpeak API for live data. Winner – Smart India Hackathon 2024.',
    tech: ['MATLAB', 'Simulink', 'Android', 'ThingSpeak', 'IoT'],
    category: 'IoT & Systems',
    icon: Smartphone,
    color: 'text-accent',
    bgColor: 'bg-accent/20',
    date: 'Jan 2025',
    status: 'Award Winner'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-accent/20 text-accent';
    case 'Completed':
      return 'bg-primary/20 text-primary';
    case 'Award Winner':
      return 'bg-primary-glow/20 text-primary-glow';
    default:
      return 'bg-muted/20 text-muted-foreground';
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-16 w-44 h-44 bg-primary/30 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-40 left-16 w-36 h-36 bg-accent/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI/ML, blockchain, IoT, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-3d rounded-2xl p-6 glow-effect hover:scale-105 transition-3d group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${project.bgColor} group-hover:scale-110 transition-3d`}>
                      <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/40 text-muted-foreground text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-smooth"
                        style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Date */}
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.date}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass-effect border-glass-border hover:border-primary transition-smooth group"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass-effect border-glass-border hover:border-accent transition-smooth group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-3d rounded-xl p-6 text-center glow-effect slide-in-left">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="card-3d rounded-xl p-6 text-center glow-effect fade-in-up">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-muted-foreground">Hackathon Won</div>
          </div>
          <div className="card-3d rounded-xl p-6 text-center glow-effect slide-in-right">
            <div className="text-3xl font-bold text-primary-glow mb-2">5+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up">
          <Button 
            size="lg"
            className="glow-effect bg-primary hover:bg-primary-deep text-primary-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Something Together
          </Button>
        </div>
      </div>
    </section>
  );
}