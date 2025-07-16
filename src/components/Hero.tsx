
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Code2, Shield, Server } from "lucide-react";

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000" 
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(147, 51, 234, 0.08) 50%, transparent 70%)`
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tech Icons Floating */}
        <div 
          className="absolute top-32 left-20 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center" 
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.1}deg)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <Code2 className="w-8 h-8 text-blue-400/60" />
        </div>
        
        <div 
          className="absolute top-48 right-32 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center" 
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${-scrollY * 0.05}deg)`,
            animation: 'float 8s ease-in-out infinite 2s'
          }}
        >
          <Shield className="w-10 h-10 text-purple-400/60" />
        </div>
        
        <div 
          className="absolute bottom-40 left-32 w-14 h-14 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 flex items-center justify-center rotate-12" 
          style={{
            transform: `translateY(${scrollY * -0.25}px) rotate(${12 + scrollY * 0.08}deg)`,
            animation: 'float 7s ease-in-out infinite 1s'
          }}
        >
          <Server className="w-7 h-7 text-green-400/60" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-blue-500/20 via-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-6xl">
        {/* Enhanced Profile and Name Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-12 animate-fade-in">
          {/* Professional Profile Section with Enhanced Design */}
          <div className="mb-8 lg:mb-0 lg:mr-16 animate-fade-in">
            <div className="relative group">
              {/* Glowing Ring Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              {/* Profile Container */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-1 shadow-2xl hover:scale-105 transition-all duration-700 cursor-pointer relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm group-hover:from-slate-700/95 group-hover:to-slate-800/95 transition-all duration-700 border border-slate-600/30">
                  <img 
                    alt="Manmadharao Menda" 
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700 object-cover" 
                    src="https://i.postimg.cc/QdYPRmTv/Pwe.jpg" 
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Floating Skills Badges */}
              <div className="absolute -top-8 -left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-4">
                <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-xs text-blue-300 font-medium">
                  DevOps
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-4" style={{ transitionDelay: '100ms' }}>
                <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-300 font-medium">
                  Security
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Typography Section */}
          <div className="text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in">
                <span className="block mb-2 lg:mb-3 text-slate-300 font-light text-lg sm:text-xl lg:text-2xl">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100 relative">
                  Manmadharao
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-white/5 to-cyan-500/10 blur-2xl -z-10" />
                </span>
              </h1>
            </div>
            
            {/* Enhanced Role Display */}
            <div className="relative overflow-hidden mt-4 lg:mt-6">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-400 font-light animate-fade-in">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3">
                  <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-blue-300 font-medium">
                    DevOps Engineer
                  </span>
                  <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1 text-purple-300 font-medium">
                    Security Analyst
                  </span>
                  <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1 text-green-300 font-medium">
                    Web Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light px-4">
          Passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium">secure systems</span> and 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium"> scalable infrastructure</span> that powers the future
        </p>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-12 lg:mb-16 animate-fade-in px-4">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 sm:px-8 lg:px-12 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden w-full sm:w-auto min-w-[180px] sm:min-w-[200px] lg:min-w-[240px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore My Work
              <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="group relative border-2 border-slate-600 hover:border-blue-500/50 text-slate-300 hover:text-white px-6 sm:px-8 lg:px-12 py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden w-full sm:w-auto min-w-[180px] sm:min-w-[200px] lg:min-w-[240px] backdrop-blur-sm"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-6 lg:space-x-8 animate-fade-in">
          {[
            { icon: Github, href: "#", label: "GitHub", color: "from-gray-500/20 to-slate-500/20 border-gray-500/30 hover:text-gray-300" },
            { icon: Linkedin, href: "#", label: "LinkedIn", color: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:text-blue-300" },
            { icon: Mail, href: "#", label: "Email", color: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:text-green-300" }
          ].map(({ icon: Icon, href, label, color }) => (
            <a 
              key={label} 
              href={href} 
              className={`group relative p-3 lg:p-4 rounded-full bg-gradient-to-br ${color} backdrop-blur-sm border transition-all duration-500 hover:scale-110 hover:-translate-y-1`}
              aria-label={label}
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center backdrop-blur-sm bg-slate-800/20">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-bounce" />
            </div>
            <div className="absolute inset-0 w-6 h-10 border-2 border-blue-400/30 rounded-full animate-ping opacity-20" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;
