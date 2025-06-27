
const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Crafting fast, responsive, and secure websites with modern technologies and best practices.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "Security Implementation"]
    },
    {
      title: "Data Visualization & Analysis",
      description: "Turning data into insights using Power BI and Python for informed decision-making.",
      icon: "📊",
      features: ["Power BI Dashboards", "Python Analytics", "Data Storytelling"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Building scalable, automated infrastructure solutions for modern applications.",
      icon: "⚙️",
      features: ["CI/CD Pipelines", "Cloud Architecture", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Implementing robust security measures to protect systems and data from threats.",
      icon: "🔒",
      features: ["Security Audits", "Threat Analysis", "Secure Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          What I <span className="text-cyan-400">Do</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-slate-700/30 p-8 rounded-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
