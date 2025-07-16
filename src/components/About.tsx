
import { useEffect, useState } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenCV = () => {
    window.open('https://drive.google.com/file/d/1TM2aGIKcRlEtPUQ5YayuMHTxzUemPwmx/view?usp=sharing', '_blank');
  };

  return (
    <section id="about" className="py-32 bg-slate-900/40 relative overflow-hidden">
      {/* Professional Parallax Background */}
      <div className="absolute inset-0 opacity-10" style={{
        transform: `translateY(${scrollY * 0.2}px)`
      }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800/20 to-slate-700/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 animate-fade-in">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">Me</span>
          </h2>
          
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-slate-300 mb-6 group-hover:text-white transition-colors duration-300">
                  My Journey
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  This is <span className="text-slate-300 font-semibold">Manmadharao Menda</span>, a cybersecurity enthusiast and DevOps engineer passionate about making information accessible, helping people solve problems, and sparking ideas.
                </p>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                  I specialize in building secure, scalable infrastructure and developing innovative solutions that bridge the gap between development and operations.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {["Problem Solver", "Innovation Driver", "Security Focused", "Team Leader"].map(trait => (
                    <span key={trait} className="bg-gradient-to-r from-slate-700/40 to-slate-600/40 text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-600/40 hover:bg-slate-600/40 transition-all duration-300">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Education */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/40 hover:border-slate-600/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-slate-300 mb-8 group-hover:text-white transition-colors duration-300">
                  Education & Certifications
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-600/40">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-500 rounded-full"></div>
                    <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700/60 hover:border-slate-600/60 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-white mb-2">B.E. Computer Science & Engineering</h4>
                      <p className="font-medium mb-2 text-slate-300">(HONS.) IBM - Information Security Specialization</p>
                      <p className="text-slate-400 text-lg font-semibold">Chandigarh University • 2021 - 2025</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-slate-600/40">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-500 rounded-full"></div>
                    <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700/60 hover:border-slate-600/60 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-white mb-2">DevOps Engineering Program</h4>
                      <p className="font-medium mb-2 text-slate-400">Advanced Infrastructure & Automation</p>
                      <p className="text-slate-400 text-lg font-semibold">Scaler Academy 2024 - 2025</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button 
                    onClick={handleOpenCV}
                    className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/20"
                  >
                    Open CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
