import { useState } from 'react';
import { Camera, Award, Code, Users, Zap, Coffee } from 'lucide-react';

const hobbies = [
  {
    title: 'Coding & Development',
    description: 'Passionate about creating innovative software solutions and learning new technologies',
    icon: Code,
    color: 'text-primary',
    bgColor: 'bg-primary/20'
  },
  {
    title: 'Tech Innovation',
    description: 'Exploring emerging technologies like AI, blockchain, and IoT to solve real-world problems',
    icon: Zap,
    color: 'text-accent',
    bgColor: 'bg-accent/20'
  },
  {
    title: 'Competitive Programming',
    description: 'Participating in hackathons and coding competitions to challenge problem-solving skills',
    icon: Award,
    color: 'text-primary-glow',
    bgColor: 'bg-primary-glow/20'
  },
  {
    title: 'Tech Community',
    description: 'Contributing to open source projects and engaging with the developer community',
    icon: Users,
    color: 'text-accent-glow',
    bgColor: 'bg-accent-glow/20'
  }
];

const interests = [
  'Machine Learning & AI Research',
  'Blockchain Development',
  'IoT & Smart Systems',
  'Cybersecurity',
  'Open Source Contribution',
  'Tech Entrepreneurship',
  'Research & Development',
  'Continuous Learning'
];

const galleryItems = [
  {
    id: 1,
    title: 'Smart India Hackathon Winner',
    category: 'Achievement',
    description: 'Winner of Smart India Hackathon 2024 for IoT-based Solar Tracker Project'
  },
  {
    id: 2,
    title: 'AI/ML Research',
    category: 'Work',
    description: 'Research work at ResAiShala Technocrats Private Limited'
  },
  {
    id: 3,
    title: 'Blockchain Development',
    category: 'Project',
    description: 'Developing decentralized applications using Ethereum and Solidity'
  },
  {
    id: 4,
    title: 'IoT Innovation',
    category: 'Technology',
    description: 'Creating smart solutions for real-world problems using IoT'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Achievement', 'Work', 'Project', 'Technology'];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-16 w-40 h-40 bg-accent/30 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-24 right-16 w-32 h-32 bg-primary/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Gallery & Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my passions, achievements, and the journey of continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hobbies & Interests */}
          <div className="space-y-8 slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Coffee className="h-6 w-6 text-primary mr-3" />
              Hobbies & Passions
            </h3>

            <div className="space-y-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={hobby.title}
                  className="card-3d rounded-xl p-6 glow-effect hover:scale-105 transition-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${hobby.bgColor} flex-shrink-0`}>
                      <hobby.icon className={`h-6 w-6 ${hobby.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-foreground">
                        {hobby.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interest Tags */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Areas of Interest:</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-glass/40 border border-glass-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary transition-smooth glow-effect"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="space-y-8 slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Camera className="h-6 w-6 text-accent mr-3" />
              Project Gallery
            </h3>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-glass/40 text-muted-foreground hover:text-primary hover:bg-primary/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="space-y-4">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="card-3d rounded-xl p-6 glow-effect hover:scale-105 transition-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h4>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Highlight */}
            <div className="card-3d rounded-xl p-6 glow-effect bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="text-center space-y-3">
                <Award className="h-12 w-12 text-primary-glow mx-auto" />
                <h4 className="text-xl font-bold text-foreground">
                  Smart India Hackathon 2024
                </h4>
                <p className="text-muted-foreground">
                  Winner for IoT-based Solar Tracker Project
                </p>
                <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                  <span>• National Level Competition</span>
                  <span>• Government of India Initiative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}