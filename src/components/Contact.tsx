import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'priyajain7988@gmail.com',
      href: 'mailto:priyajain7988@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7988217831',
      href: 'tel:+917988217831',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Panipat, Haryana',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/priyajain7988',
      username: '@priyajain7988',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/priyajain',
      username: 'Priya Jain',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/priyajain',
      username: '@priyajain',
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-glass border-border/50 hover:card-glow transition-all duration-300 hover:scale-105 text-center group"
              >
                <a
                  href={method.href}
                  className={method.href === '#' ? 'pointer-events-none' : ''}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </a>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="p-8 backdrop-blur-glass border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Connect on <span className="text-gradient">Social Media</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all group"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center gap-2 w-full">
                      <social.icon className="w-6 h-6 text-primary" />
                      <div className="text-center">
                        <div className="font-semibold">{social.label}</div>
                        <div className="text-xs text-muted-foreground">{social.username}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="p-8 backdrop-blur-glass border-border/50 bg-gradient-to-r from-primary/5 to-cyan-500/5">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">
                Let's create something amazing together. I'm just an email away!
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                asChild
              >
                <a href="mailto:priyajain7988@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Code2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
