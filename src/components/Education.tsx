import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    institution: 'Dharmaraja Ramswaroop Sharma University',
    location: 'Udaipur, Rajasthan',
    duration: 'Sept 2022 - June 2026',
    grade: 'CGPA: 8.9/10',
    relevant: 'Cybersecurity, Machine Learning, IoT Systems, Web development',
    type: 'current'
  }
];

const achievements = [
  'Winner: Smart India Hackathon 2024 for IoT-based Solar Tracker Project',
  'AI/ML Research Intern at ResAiShala Technocrats Private Limited',
  'Developing real-time integrated platforms combining AI, IoT, Android, and blockchain technologies',
  'Skilled in building real-world applications that decentralize and streamline traditional processes',
  'Java Full Stack Developer: Experienced in building robust web applications using Spring Boot (backend) and React (frontend)'
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science with hands-on experience in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <div className="space-y-8 slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Academic Journey
            </h3>

            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="card-3d rounded-2xl p-6 glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-primary font-medium">
                        {edu.field}
                      </p>
                    </div>
                    {edu.type === 'current' && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Institution Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="h-4 w-4 text-accent mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-primary font-bold">{edu.grade}</p>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Relevant Coursework:</h5>
                    <p className="text-muted-foreground">{edu.relevant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-8 slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 text-accent mr-3" />
              Key Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-3d rounded-xl p-4 hover:scale-105 transition-3d glow-effect"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="card-3d rounded-xl p-4 text-center glow-effect">
                <div className="text-2xl font-bold text-primary">8.9</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="card-3d rounded-xl p-4 text-center glow-effect">
                <div className="text-2xl font-bold text-accent">2026</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}