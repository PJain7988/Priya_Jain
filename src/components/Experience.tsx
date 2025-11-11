import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development',
      company: 'Coding Blocks, Geeta University',
      location: 'Panipat',
      period: 'June 2025 – August 2025',
      type: 'Internship',
      description: [
        'Developed full-stack applications using the MERN stack, gaining hands-on experience in both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies',
        'Built and deployed responsive, user-friendly web projects, strengthening skills in RESTful APIs, component-based design, and end-to-end application architecture',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'DSA with C++',
      company: 'Coding Blocks, Geeta University',
      location: 'Panipat',
      period: 'June 2024 – August 2024',
      type: 'Internship',
      description: [
        'Solved over 700+ DSA problems, strengthening expertise in advanced algorithms, recursion, backtracking, and data structures using C++',
        'Conducted hands-on sessions and mentored peers, simplifying complex topics and guiding real-world DSA implementations',
      ],
      skills: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Mentoring'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-cyan-400" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className="md:w-1/2">
                    <Card className="p-6 backdrop-blur-glass border-border/50 hover:card-glow transition-all duration-300 hover:scale-[1.02] h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-2">
                            {exp.type}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((point, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
