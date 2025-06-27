
import { useEffect, useState } from "react";

const Skills = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600", icon: "🐍" },
    { name: "Data Structures & Algorithms", level: 85, color: "from-green-400 to-green-600", icon: "🧠" },
    { name: "Linux OS", level: 88, color: "from-orange-400 to-orange-600", icon: "🐧" },
    { name: "DevOps Tools", level: 82, color: "from-blue-400 to-blue-600", icon: "⚙️" },
    { name: "Power BI", level: 80, color: "from-purple-400 to-purple-600", icon: "📊" },
    { name: "AWS", level: 85, color: "from-orange-400 to-orange-600", icon: "☁️" },
    { name: "Security Analytics", level: 87, color: "from-red-400 to-red-600", icon: "🔒" },
    { name: "React & TypeScript", level: 83, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 animate-fade-in">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
        </h2>
        
        {/* Grid Layout for Skills */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.6s ease-out'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Proficiency Level
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
