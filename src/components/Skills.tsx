import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Smartphone,
  FileCode,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Java Servlet', level: 70 },
        { name: 'Spring Boot', level: 75 }
      ]
    },
    {
      title: 'Databases & Backend',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 90 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Git/GitHub', level: 85 }
      ]
    }
  ];

  const coreCompetencies = [
    { name: 'Object-Oriented Programming', icon: FileCode },
    { name: 'Full Stack Development', icon: Server },
    { name: 'Responsive Design', icon: Smartphone },
    { name: 'Version Control', icon: GitBranch }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning multiple technologies and programming languages, 
            with a focus on modern web development and software engineering principles.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {coreCompetencies.map((competency, index) => (
            <div 
              key={index}
              className="portfolio-card p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <competency.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{competency.name}</h3>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="portfolio-card p-6"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;