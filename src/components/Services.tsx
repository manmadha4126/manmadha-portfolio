
const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Crafting fast, responsive, and secure websites with modern technologies and best practices.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "Security Implementation"],
      backContent: "Modern web solutions using React, TypeScript, and cutting-edge frameworks for optimal user experiences."
    },
    {
      title: "Data Visualization & Analysis",
      description: "Turning data into insights using Power BI and Python for informed decision-making.",
      icon: "📊",
      features: ["Power BI Dashboards", "Python Analytics", "Data Storytelling"],
      backContent: "Transform complex datasets into actionable insights with advanced visualization tools and statistical analysis."
    },
    {
      title: "DevOps & Infrastructure",
      description: "Building scalable, automated infrastructure solutions for modern applications.",
      icon: "⚙️",
      features: ["CI/CD Pipelines", "Cloud Architecture", "Infrastructure as Code"],
      backContent: "Streamline deployment processes with Docker, Kubernetes, AWS, and automated testing pipelines."
    },
    {
      title: "Cybersecurity Solutions",
      description: "Implementing robust security measures to protect systems and data from threats.",
      icon: "🔒",
      features: ["Security Audits", "Threat Analysis", "Secure Development"],
      backContent: "Comprehensive security assessment and implementation of industry-standard protection protocols."
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-800/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 animate-fade-in">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Do</span>
        </h2>
        
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group perspective-1000 h-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-4 right-4 text-cyan-400/60 text-sm">
                    Hover to learn more →
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 rounded-2xl border border-cyan-500/50 shadow-xl backdrop-blur-sm">
                  <div className="flex flex-col justify-center h-full text-center">
                    <div className="text-4xl mb-6 text-cyan-400">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {service.backContent}
                    </p>
                    <div className="mt-6">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
