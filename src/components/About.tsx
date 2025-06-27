
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                This is Manmadharao Menda, a cybersecurity enthusiast and DevOps engineer passionate about making information accessible, helping people solve problems, and sparking ideas.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in building secure, scalable infrastructure and developing innovative solutions that bridge the gap between development and operations.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium">B.E. Computer Science & Engineering</h4>
                    <p className="text-gray-400">Information Security • Chandigarh University • 2025</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">DevOps Engineering Program</h4>
                    <p className="text-gray-400">Scaler Academy • 2025</p>
                  </div>
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
