import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with responsive cart, secure checkout, and integrated admin dashboard for managing users and products. Built with modern web technologies ensuring seamless user experience.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      features: [
        'Responsive shopping cart with real-time updates',
        'Secure checkout process with payment integration',
        'Admin dashboard for product & user management',
        'RESTful API architecture',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Quiz Management System',
      description:
        'A comprehensive full-stack quiz application enabling admins to create and manage quizzes while users can attempt them with instant result evaluation. Features secure authentication and role-based access.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'bcrypt'],
      features: [
        'Role-based access control (Admin/User)',
        'Secure JWT authentication',
        'Real-time quiz evaluation',
        'Quiz creation and management tools',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Task Manager',
      description:
        'A robust, scalable task management application with RESTful APIs. Features an interactive, responsive UI enabling real-time task creation, editing, and deletion with efficient data persistence.',
      tech: ['Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'RESTful API architecture',
        'Real-time CRUD operations',
        'Responsive and intuitive UI',
        'Efficient data persistence',
      ],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my full-stack development projects built with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group backdrop-blur-glass border-border/50 overflow-hidden hover:card-glow transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
