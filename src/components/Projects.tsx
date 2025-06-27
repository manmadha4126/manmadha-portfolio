
const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured <span className="text-cyan-400">Project</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Two-Way Authentication using Raspberry Pi</h3>
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
                    <span key={tech} className="bg-slate-700/50 text-cyan-400 px-4 py-2 rounded-full text-sm border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl text-cyan-400 font-bold">Hardware</div>
                  <div className="text-gray-400 text-sm">Integration</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl text-cyan-400 font-bold">Security</div>
                  <div className="text-gray-400 text-sm">Implementation</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl text-cyan-400 font-bold">Mobile</div>
                  <div className="text-gray-400 text-sm">Application</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
