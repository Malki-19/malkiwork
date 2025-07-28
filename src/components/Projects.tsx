import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills and projects with smooth animations and dark mode design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      status: 'Completed'
    },
    {
      title: 'Coffee Shop Website',
      description: 'An elegant e-commerce website for a coffee shop with product catalog, ordering system, and customer management features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      status: 'In Progress'
    },
    {
      title: 'HR Management System',
      description: 'A comprehensive human resource management system with employee tracking, payroll management, and performance analytics.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
      category: 'Enterprise Software',
      status: 'Planning'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating proficiency in various technologies 
            and software development methodologies.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-card p-6 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  disabled={project.status === 'Planning'}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  disabled={project.status !== 'Completed'}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;