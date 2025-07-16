
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Professional Dark Background with Subtle Gradient */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.4) 35%, rgba(2, 6, 23, 0.8) 100%)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-950/80"></div>
      </div>

      {/* Subtle Professional Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-24 h-24 border border-slate-700/30 rounded-full backdrop-blur-sm" 
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.05}deg)`
          }}
        ></div>
        <div 
          className="absolute top-60 right-20 w-16 h-16 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-lg rotate-45 backdrop-blur-sm" 
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${45 + scrollY * 0.05}deg)`
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 border border-slate-600/40 rotate-12 backdrop-blur-sm" 
          style={{
            transform: `translateY(${scrollY * -0.25}px) rotate(${12 + scrollY * 0.1}deg)`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Profile and Name Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-12 animate-fade-in">
          {/* Professional Profile Section */}
          <div className="mb-8 lg:mb-0 lg:mr-12 animate-fade-in">
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 p-1 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800/95 backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-slate-800/95 group-hover:to-slate-700/95 transition-all duration-500">
                  <img 
                    alt="Manmadharao Menda" 
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-scale-down" 
                    src="https://i.postimg.cc/QdYPRmTv/Pwe.jpg" 
                  />
                </div>
              </div>
              {/* Professional Status Indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-0">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Professional Typography */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in">
              <span className="block mb-2 lg:mb-4 text-slate-200">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-300 relative">
                Manmadharao
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-400/10 via-white/10 to-slate-400/10 blur-xl -z-10"></div>
              </span>
            </h1>
            
            <div className="text-base md:text-lg lg:text-2xl xl:text-3xl text-slate-400 font-light animate-fade-in overflow-hidden mt-4 lg:mt-6">
              <div className="inline-block bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent">
                DevOps Engineer • Security Analyst • Web Developer
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-base md:text-lg lg:text-xl text-slate-400 mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light px-4">
          Solving problems through <span className="text-slate-300 font-medium">secure systems</span> and <span className="text-slate-300 font-medium">scalable infrastructure</span>
        </p>

        {/* Professional Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16 animate-fade-in px-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="group relative bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-slate-500/20 overflow-hidden w-full sm:w-auto min-w-[200px] lg:min-w-[240px] hover:from-slate-600 hover:to-slate-500"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore My Work
              <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="group relative border-2 border-slate-600 text-slate-300 hover:text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:border-slate-500 overflow-hidden w-full sm:w-auto min-w-[200px] lg:min-w-[240px]"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Professional Social Links */}
        <div className="flex justify-center space-x-6 lg:space-x-8 animate-fade-in">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a 
              key={label} 
              href={href} 
              className="group relative p-3 lg:p-4 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600/60 transition-all duration-500 hover:scale-110 hover:bg-slate-700/60" 
              aria-label={label}
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </a>
          ))}
        </div>

        {/* Professional Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
