
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Parallax Background with Mouse Movement */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 35%, rgba(147, 51, 234, 0.2) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50"></div>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/20 rounded-full animate-pulse backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
        <div 
          className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl rotate-45 animate-pulse backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${45 + scrollY * 0.1}deg)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-pulse backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * -0.4}px) rotate(${12 + scrollY * 0.2}deg)` }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse backdrop-blur-sm"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Profile and Name Section - Side by Side Layout */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          {/* Enhanced Profile Section - Left Side */}
          <div className="mr-12 animate-fade-in">
            <div className="relative group">
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-700 cursor-pointer">
                <div className="w-full h-full rounded-full bg-slate-800/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-slate-800/90 group-hover:to-slate-700/90 transition-all duration-700">
                  <div className="text-8xl font-bold text-white group-hover:scale-110 transition-transform duration-500">MM</div>
                </div>
              </div>
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-0">
                <div className="w-6 h-6 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Typography - Right Side */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
              <span className="block mb-4">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse relative">
                Manmadharao
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-light animate-fade-in overflow-hidden mt-6">
              <div className="inline-block animate-pulse bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                DevOps Engineer • Security Analyst • Web Developer
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light">
          Solving problems through <span className="text-cyan-400 font-medium">secure systems</span> and <span className="text-blue-400 font-medium">scalable infrastructure</span>
        </p>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden min-w-[240px]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative border-2 border-gray-400 text-gray-300 hover:text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:border-cyan-400 overflow-hidden min-w-[240px]"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-8 animate-fade-in">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group relative p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 hover:bg-slate-700/50"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
