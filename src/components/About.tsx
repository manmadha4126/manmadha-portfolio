
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-32 bg-slate-800/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-10" style={{
        transform: `translateY(${scrollY * 0.2}px)`
      }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 animate-fade-in">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                  My Journey
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  This is <span className="text-cyan-400 font-semibold">Manmadharao Menda</span>, a cybersecurity enthusiast and DevOps engineer passionate about making information accessible, helping people solve problems, and sparking ideas.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  I specialize in building secure, scalable infrastructure and developing innovative solutions that bridge the gap between development and operations.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {["Problem Solver", "Innovation Driver", "Security Focused", "Team Leader"].map(trait => (
                    <span key={trait} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Education */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-slate-700/40 to-slate-800/40 p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-8 group-hover:text-cyan-300 transition-colors duration-300">
                  Education & Certifications
                </h3>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-white mb-2">B.E. Computer Science & Engineering</h4>
                      <p className="font-medium mb-2 text-cyan-500">(HONS.) IBM - Information Security Specialization</p>
                      <p className="text-gray-400 text-lg font-semibold">Chandigarh University • 2021 - 2025</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                      <h4 className="text-xl font-semibold text-white mb-2">DevOps Engineering Program</h4>
                      <p className="font-medium mb-2 text-blue-400">Advanced Infrastructure & Automation</p>
                      <p className="text-gray-400 text-lg font-semibold">Scaler Academy 2024 - 2025</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                        Download CV
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[90vh] bg-slate-900 border-slate-700">
                      <div className="flex items-center justify-center h-full p-4">
                        <img 
                          src="/lovable-uploads/ad94cb68-317c-43e3-8fce-3f4b047af647.png" 
                          alt="Manmadharao Menda CV" 
                          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
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
