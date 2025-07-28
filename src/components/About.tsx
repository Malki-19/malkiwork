import { GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSc (Hons) Software Engineering at NSBM Green University, graduating in 2027'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Connecting business processes with innovative IT solutions'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Active member of IEEE Computer Society and university volunteer'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Passionate Software Engineer in the Making
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm Malki Munasinghe, a dedicated Software Engineering undergraduate at NSBM Green University 
              with a graduation target of 2027. My journey in technology is driven by a unique passion for 
              bridging the gap between business processes and innovative IT solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              What sets me apart is my ability to blend creativity with technical expertise, creating 
              digital experiences that are not only functional but meaningful. I believe in the power 
              of technology to transform how businesses operate and connect with their audiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I'm an active member of the IEEE Computer Society, where I stay updated 
              with the latest technological trends and network with fellow tech enthusiasts. I also 
              volunteer enthusiastically in various university clubs, contributing to our vibrant campus community.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {['Creative Problem Solving', 'Business-IT Integration', 'Team Collaboration', 'Continuous Learning'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="portfolio-card p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;