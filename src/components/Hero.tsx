
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="text-4xl font-bold text-white">MM</div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Manmadharao Menda
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
          DevOps Engineer | Security Analyst | Web Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Solving problems through secure systems and scalable infrastructure
        </p>

        {/* CTA Button */}
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 animate-fade-in"
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
