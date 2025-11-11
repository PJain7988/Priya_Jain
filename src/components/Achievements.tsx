import { Trophy, Award, Code2, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Google STEP Internship',
      period: 'Jan 2025 – Feb 2025',
      description:
        'Shortlisted and cleared 2 rounds of the Google STEP selection process by solving algorithmic challenges and implementing efficient coding solutions.',
      highlights: ['Cleared 2 selection rounds', 'Algorithmic problem solving', 'Technical interviews'],
    },
    {
      icon: Code2,
      title: '700+ LeetCode Problems',
      period: 'Ongoing',
      description:
        'Built deep proficiency in algorithms and data structures by consistently solving problems, including advanced topics like Dynamic Programming and Recursion.',
      highlights: ['N-Queens solution', 'Regular Expression Matching', 'Advanced DP problems'],
    },
    {
      icon: Target,
      title: '100 Days of Code',
      period: 'July 2024 – October 2024',
      description:
        'Successfully completed the challenge, improving coding discipline, problem-solving consistency, and algorithmic thinking through daily practice.',
      highlights: ['100 consecutive days', 'Consistent practice', 'Skill improvement'],
    },
    {
      icon: Trophy,
      title: 'AWS Solutions Architecture',
      period: 'October 2025',
      description:
        'Completed AWS APAC Solutions Architecture Virtual Experience Program. Designed scalable cloud architecture using AWS Elastic Beanstalk and presented cost-efficient solutions.',
      highlights: ['Cloud architecture design', 'AWS Elastic Beanstalk', 'Cost optimization'],
    },
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="text-gradient">Awards</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Recognition and milestones that demonstrate commitment to excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-glass border-border/50 hover:card-glow transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-cyan-500/30 transition-colors">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-primary">{achievement.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/80 mb-4">{achievement.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Highlights
                  </p>
                  <ul className="space-y-1">
                    {achievement.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '700+', label: 'Problems Solved' },
              { value: '100', label: 'Days of Code' },
              { value: '2', label: 'Google Rounds' },
              { value: '1', label: 'AWS Certification' },
            ].map((stat, i) => (
              <Card
                key={i}
                className="p-6 backdrop-blur-glass border-border/50 text-center hover:card-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
