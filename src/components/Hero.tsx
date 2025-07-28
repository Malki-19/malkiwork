import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/reference-image.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Software Engineering Student';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const FloatingIcon = ({ Icon, delay, className }: { Icon: any, delay: number, className: string }) => (
    <div 
      className={`absolute ${className} opacity-20 floating-icon`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon size={24} className="text-primary" />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
      
      {/* Floating icons */}
      <FloatingIcon Icon={Github} delay={0} className="top-20 left-20" />
      <FloatingIcon Icon={Linkedin} delay={1} className="top-32 right-32" />
      <FloatingIcon Icon={Mail} delay={2} className="bottom-40 left-16" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-2 animate-fade-in-up">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-left">
              <span className="glow-text">Malki</span>{' '}
              <span className="text-foreground">Munasinghe</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 flex items-center justify-center lg:justify-start">
              <span className="font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate about blending creativity and technical skills to build meaningful digital experiences. 
            Currently pursuing Software Engineering at NSBM Green University, graduating in 2027.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:malkimunasinghe22@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
            <img 
              src={profileImage} 
              alt="Malki Munasinghe" 
              className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce">
              <span className="text-primary-foreground font-bold">👋</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;