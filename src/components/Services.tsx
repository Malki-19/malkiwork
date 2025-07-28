import { 
  Code, 
  Palette, 
  Globe, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like React, TypeScript, and modern CSS frameworks.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions using object-oriented programming principles and modern development methodologies.',
      features: ['OOP Principles', 'Clean Code', 'Testing', 'Documentation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Mobile-optimized applications that provide seamless experiences across all device types and screen sizes.',
      features: ['Responsive Design', 'Touch Optimization', 'Progressive Web Apps', 'Cross-platform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust backend systems with secure APIs, database design, and server-side architecture.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Scalable Architecture'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Business-IT Integration',
      description: 'Bridging the gap between business processes and technology solutions to drive digital transformation.',
      features: ['Process Analysis', 'System Integration', 'Workflow Automation', 'Digital Strategy'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="glow-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services that blend creativity with technical expertise 
            to deliver meaningful digital solutions for businesses and individuals.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="portfolio-card p-6 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`bg-gradient-to-br ${service.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight size={14} className="text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary/50"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to create innovative solutions that bridge the gap between 
              your business goals and cutting-edge technology.
            </p>
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;