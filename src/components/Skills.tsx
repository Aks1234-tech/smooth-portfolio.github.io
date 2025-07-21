import { Code, Database, Smartphone, Shield, Brain, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    skills: ['C++', 'Java', 'Python', 'Solidity']
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'text-accent',
    bgColor: 'bg-accent/20',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS']
  },
  {
    title: 'Data Analysis & Visualization',
    icon: Database,
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/20',
    skills: ['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'Plotly']
  },
  {
    title: 'Frameworks/Tools',
    icon: Brain,
    color: 'text-accent-glow',
    bgColor: 'bg-accent-glow/20',
    skills: ['MATLAB', 'OpenCV', 'Jupyter', 'Android', 'TensorFlow', 'Git']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'text-primary-deep',
    bgColor: 'bg-primary-deep/20',
    skills: ['Android Studio', 'Java', 'Kotlin', 'React Native']
  },
  {
    title: 'Specializations',
    icon: Shield,
    color: 'text-accent',
    bgColor: 'bg-accent/20',
    skills: ['Machine Learning', 'Deep Learning', 'Blockchain', 'IoT Systems', 'Cybersecurity']
  }
];

const techStack = [
  { name: 'React', level: 90 },
  { name: 'Python', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Java', level: 88 },
  { name: 'C++', level: 82 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 70 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-36 h-36 bg-primary/30 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-accent/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and emerging technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-3d rounded-2xl p-6 glow-effect hover:scale-105 transition-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 opacity-0 fade-in-up"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-muted-foreground hover:text-foreground transition-smooth">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{tech.name}</span>
                    <span className="text-primary text-sm font-bold">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tech.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Skills Visualization */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="card-3d rounded-2xl p-8 text-center glow-effect">
                <h4 className="text-xl font-bold text-foreground mb-6">
                  Core Competencies
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Programming Languages</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary-glow">8+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-accent-glow">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center floating-animation">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center floating-animation" style={{ animationDelay: '2s' }}>
                  <Brain className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}