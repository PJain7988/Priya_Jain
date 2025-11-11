import { Code2, Database, Wrench, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C++', 'C', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web Technologies',
      icon: Layers,
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['MongoDB', 'SQL', 'Git', 'GitHub', 'VS Code', 'Oracle'],
    },
    {
      title: 'Core Concepts',
      icon: Wrench,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'C++ STL', 'OS', 'DBMS'],
    },
  ];

  const softSkills = [
    'Quick Learner',
    'Problem Solver',
    'Team Collaboration',
    'Result-Oriented',
    'Analytical Thinking',
    'Time Management',
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-glass border-border/50 hover:card-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <Card className="p-8 backdrop-blur-glass border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Soft <span className="text-gradient">Skills</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover:scale-105 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
