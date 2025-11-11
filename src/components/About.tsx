import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  const education = [
    {
      degree: 'B.Tech (Computer Science and Engineering)',
      institution: 'Geeta University, Panipat',
      period: '2023 – 2027',
      icon: GraduationCap,
    },
    {
      degree: 'HBSE (Intermediate)',
      institution: 'Guru Gobind Singh Sr. Sec. School, Safidon',
      period: '2021 – 2023',
      icon: GraduationCap,
    },
    {
      degree: 'HBSE (Matriculation)',
      institution: 'Guru Gobind Singh Sr. Sec. School, Safidon',
      period: '2020 – 2021',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="p-8 backdrop-blur-glass border-border/50 card-glow">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a passionate Computer Science student at <span className="text-primary font-semibold">Geeta University</span>, 
                driven by the challenge of building robust full-stack applications and solving complex algorithmic problems. 
                My journey in technology is defined by a commitment to continuous learning and practical application.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                With hands-on experience in the <span className="text-primary font-semibold">MERN stack</span> and 
                a proven track record in competitive programming, I've developed a unique blend of problem-solving 
                skills and practical development expertise. My work spans from building scalable web applications 
                to tackling advanced data structures and algorithms.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Educational <span className="text-gradient">Journey</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-glass border-border/50 hover:card-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
