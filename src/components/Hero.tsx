import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <img
                src="/sahjad 1.jpg"
                alt="Sahjad Ansari"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sahjad Ansari</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-slide-up animation-delay-200">
            Full Stack Developer & Creative Problem Solver
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-300">
            Crafting beautiful, functional web experiences with modern technologies.
            Passionate about clean code and elegant solutions.
          </p>

          <div className="flex gap-4 justify-center mb-12 animate-slide-up animation-delay-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sahjad@example.com"
               className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up animation-delay-500"
          >
            View My Work
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </button>
    </section>
  );
}
