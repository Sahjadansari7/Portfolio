import { Code2, Palette, Rocket, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code following best practices' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { icon: Zap, title: 'Performance', description: 'Optimizing applications for speed and efficiency' },
    { icon: Rocket, title: 'Innovation', description: 'Staying current with latest technologies and trends' },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'Tailwind CSS', 'Next.js', 'GraphQL', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a passionate full stack developer with over 5 years of experience building web applications
                that solve real-world problems. I love turning complex challenges into simple, beautiful, and
                intuitive solutions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source
                projects, or sharing knowledge with the developer community through blog posts and tutorials.
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <skill.icon className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
