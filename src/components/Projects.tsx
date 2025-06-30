
import { useEffect, useState } from "react";

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleViewDetails = () => {
    // Open the PDF file
    window.open("file:///C:/Users/menda/Downloads/publishing%20research%20paper/IJNRD2311374.pdf", "_blank");
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="absolute top-20 right-20 w-40 h-40 border border-cyan-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 animate-fade-in">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Featured Project - Smaller Size */}
          <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-white text-xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Two-Way Authentication using Raspberry Pi
                  </h3>
                  <p className="text-cyan-400 font-medium">Team Leader & Technical Lead</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                A secure two-factor authentication system for physical access using Raspberry Pi, mobile app integration, and camera verification. This innovative solution combines hardware and software to create a robust security system for access control.
              </p>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {["Raspberry Pi", "Sensors", "Cameras", "Wireless Communication", "Mobile App", "Security Protocols"].map((tech) => (
                    <span key={tech} className="bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-cyan-400 px-4 py-2 rounded-full border border-slate-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Hardware", subtitle: "Integration", icon: "⚙️" },
                  { title: "Security", subtitle: "Implementation", icon: "🔒" },
                  { title: "Mobile", subtitle: "Application", icon: "📱" }
                ].map((item, index) => (
                  <div key={item.title} className="text-center p-4 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group/card">
                    <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-lg text-cyan-400 font-bold mb-1 group-hover/card:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </div>
                    <div className="text-gray-400 text-xs group-hover/card:text-gray-300 transition-colors duration-300">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                <button 
                  onClick={handleViewDetails}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
                >
                  View Details
                </button>
                <button className="border-2 border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                  GitHub Repository
                </button>
              </div>
            </div>
          </div>

          {/* Additional Project Cards Grid - Slightly Smaller */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Coming Soon", description: "More projects in development", icon: "🚀" },
              { title: "Portfolio Website", description: "Modern responsive portfolio", icon: "💻" },
              { title: "Future Project", description: "Innovation in progress", icon: "⭐" }
            ].map((project, index) => (
              <div key={project.title} className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 rounded-2xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
