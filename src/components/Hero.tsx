
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rounded-full animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg rotate-45 animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-purple-400/30 rotate-12 animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.4}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image with Hover Effect */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer group">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-700 transition-all duration-500">
              <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">MM</div>
            </div>
          </div>
        </div>

        {/* Animated Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
            Manmadharao
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in overflow-hidden">
          <div className="inline-block animate-pulse">
            DevOps Engineer | Security Analyst | Web Developer
          </div>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Solving problems through secure systems and scalable infrastructure
        </p>

        {/* Enhanced CTA Button */}
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/30 animate-fade-in overflow-hidden"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
