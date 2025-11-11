import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main heading */}
          <div className="fade-in-element space-y-4">
            <div className="inline-block">
              <span className="text-primary text-sm md:text-base font-medium tracking-wider uppercase">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block">Priya Jain</span>
              <span className="block text-gradient glow-effect mt-2">
                Building Solutions
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="fade-in-element max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Computer Science student passionate about creating elegant full-stack applications 
            and solving complex algorithmic challenges. Specialized in MERN stack with 
            <span className="text-primary font-semibold"> 700+ LeetCode </span> 
            problems solved.
          </p>

          {/* Stats */}
          <div className="fade-in-element grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
            {[
              { icon: Code2, label: 'LeetCode', value: '700+' },
              { icon: Award, label: 'Projects', value: '10+' },
              { icon: Github, label: 'Commits', value: '500+' },
              { icon: Award, label: 'Achievements', value: '5+' },
            ].map((stat, i) => (
              <div
                key={i}
                className="backdrop-blur-glass border border-border rounded-lg p-4 hover:card-glow transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-element flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 font-semibold px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in-element flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/priyajain7988', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/priyajain', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:priyajain7988@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+917988217831', label: 'Phone' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border backdrop-blur-glass flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
