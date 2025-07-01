
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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

  const serviceTemplates = {
    "Web Design & Development": `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #121212; color: #f0f0f0; line-height: 1.6; padding: 2rem;">
        <div style="max-width: 800px; margin: auto;">
          <h1 style="color: #00d4ff;">Web Design & Development</h1>
          <p>
            Web design and development is the process of creating functional, attractive, and user-centered websites or web applications. It involves two primary disciplines: design and development.
          </p>

          <h2 style="color: #00d4ff;">Web Design</h2>
          <p>
            Web design focuses on aesthetics and usability. It includes layout structure, color schemes, typography, branding, responsiveness, and user experience (UX). Designers often use tools like Figma, Adobe XD, or Sketch to create wireframes and mockups that guide the overall visual direction.
          </p>

          <h2 style="color: #00d4ff;">Web Development</h2>
          <p>
            Web development brings the design to life using code. It's typically divided into:
          </p>
          <ul>
            <li><strong>Frontend Development:</strong> Builds the interface users interact with using HTML, CSS, JavaScript, and frameworks like React or Vue.</li>
            <li><strong>Backend Development:</strong> Handles server-side logic, databases, authentication, and APIs, often using languages like Python, Node.js, PHP, or Ruby.</li>
            <li><strong>Full-Stack Development:</strong> Combines both frontend and backend skills to build end-to-end applications.</li>
          </ul>

          <h2 style="color: #00d4ff;">Why It Matters</h2>
          <p>
            A well-designed and well-developed website helps businesses reach more customers, build trust, and improve engagement. As technology evolves, web professionals need to stay updated with best practices, accessibility standards, and security protocols.
          </p>

          <p>
            Whether you're a business owner, freelancer, or aspiring developer, understanding the fundamentals of web design and development is essential in today's digital world.
          </p>

          <p><em>Created by Manmadha | Learn more at <a href="https://www.linkedin.com/in/manmadha-menda-1b3950244" target="_blank" style="color: #66e0ff;">LinkedIn</a></em></p>
        </div>
      </div>
    `,
    "Data Visualization & Analysis": `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #121212; color: #f0f0f0; line-height: 1.6; padding: 2rem;">
        <div style="max-width: 800px; margin: auto;">
          <h1 style="color: #00d4ff;">Data Visualization & Analysis</h1>
          <p>
            Data visualization and analysis are critical components of decision-making in today's data-driven world. Together, they help transform raw data into meaningful insights, enabling businesses and individuals to understand trends, identify patterns, and make informed choices.
          </p>

          <h2 style="color: #00d4ff;">Data Analysis</h2>
          <p>
            Data analysis is the process of cleaning, transforming, and modeling data to uncover useful information. It can be:
          </p>
          <ul>
            <li><strong>Descriptive:</strong> Summarizes past data using statistics (e.g., averages, percentages).</li>
            <li><strong>Diagnostic:</strong> Examines causes behind certain trends or results.</li>
            <li><strong>Predictive:</strong> Uses machine learning or forecasting models to anticipate future outcomes.</li>
            <li><strong>Prescriptive:</strong> Suggests actions based on data insights.</li>
          </ul>

          <h2 style="color: #00d4ff;">Data Visualization</h2>
          <p>
            Data visualization involves presenting data graphically using charts, graphs, and maps. It helps communicate complex information clearly and quickly. Common tools include:
          </p>
          <ul>
            <li>Tableau, Power BI</li>
            <li>Python libraries like Matplotlib, Seaborn, Plotly</li>
            <li>D3.js for interactive web-based visualizations</li>
          </ul>

          <h2 style="color: #00d4ff;">Why It Matters</h2>
          <p>
            Visual analytics empowers users to identify trends, outliers, and correlations that may not be obvious in raw data. It enhances storytelling with data, supports better business decisions, and drives innovation across industries from finance and healthcare to marketing and technology.
          </p>

          <p>
            Whether you're a data scientist, analyst, or business strategist, mastering data visualization and analysis is key to turning numbers into knowledge.
          </p>

          <p><em>Created by Manmadha | Learn more at <a href="https://www.linkedin.com/in/manmadha-menda-1b3950244" target="_blank" style="color: #66e0ff;">LinkedIn</a></em></p>
        </div>
      </div>
    `,
    "DevOps & Infrastructure": `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #121212; color: #f0f0f0; line-height: 1.6; padding: 2rem;">
        <div style="max-width: 800px; margin: auto;">
          <h1 style="color: #00d4ff;">DevOps & Infrastructure</h1>
          <p>
            DevOps and Infrastructure are foundational to building reliable, scalable, and efficient digital systems. Together, they bridge the gap between development and operations, enabling faster delivery, automation, and high system availability.
          </p>

          <h2 style="color: #00d4ff;">What is DevOps?</h2>
          <p>
            DevOps is a culture and set of practices that integrate software development (Dev) and IT operations (Ops). It promotes collaboration, automation, continuous integration (CI), and continuous delivery (CD) to streamline the software lifecycle.
          </p>

          <ul>
            <li><strong>CI/CD Pipelines:</strong> Automate building, testing, and deployment of code changes.</li>
            <li><strong>Monitoring & Logging:</strong> Ensure system health and rapid incident response.</li>
            <li><strong>Infrastructure as Code (IaC):</strong> Manage infrastructure using code via tools like Terraform or Ansible.</li>
          </ul>

          <h2 style="color: #00d4ff;">Infrastructure Management</h2>
          <p>
            Infrastructure refers to the hardware, networks, and systems that support application delivery. Modern infrastructure management emphasizes cloud computing, automation, and scalability.
          </p>
          <ul>
            <li><strong>Cloud Platforms:</strong> AWS, Azure, and Google Cloud offer scalable compute, storage, and networking.</li>
            <li><strong>Containerization:</strong> Docker and Kubernetes simplify deployment and scaling of applications.</li>
            <li><strong>Security & Compliance:</strong> Ensuring systems are protected against threats and meet regulatory requirements.</li>
          </ul>

          <h2 style="color: #00d4ff;">Why It Matters</h2>
          <p>
            Effective DevOps and infrastructure practices lead to faster development cycles, reduced downtime, better collaboration, and improved system reliability. As businesses scale, these components are essential to maintaining performance and agility.
          </p>

          <p>
            Mastery of DevOps tools and modern infrastructure strategies is vital for any organization aiming to thrive in today's fast-paced tech environment.
          </p>

          <p><em>Created by Manmadha | Learn more at <a href="https://www.linkedin.com/in/manmadha-menda-1b3950244" target="_blank" style="color: #66e0ff;">LinkedIn</a></em></p>
        </div>
      </div>
    `,
    "Cybersecurity Solutions": `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #121212; color: #f0f0f0; line-height: 1.6; padding: 2rem;">
        <div style="max-width: 800px; margin: auto;">
          <h1 style="color: #00d4ff;">Cybersecurity Solutions</h1>
          <p>
            In a world where digital threats are growing more sophisticated, cybersecurity solutions play a critical role in protecting data, systems, and infrastructure. These solutions are essential for businesses, governments, and individuals to ensure confidentiality, integrity, and availability of information.
          </p>

          <h2 style="color: #00d4ff;">What is Cybersecurity?</h2>
          <p>
            Cybersecurity is the practice of defending computers, servers, mobile devices, networks, and data from malicious attacks. It encompasses both technology and human processes to prevent, detect, and respond to threats.
          </p>

          <h2 style="color: #00d4ff;">Types of Cybersecurity Solutions</h2>
          <ul>
            <li><strong>Network Security:</strong> Protects internal networks from unauthorized access or intrusions using firewalls, IDS/IPS, and VPNs.</li>
            <li><strong>Endpoint Security:</strong> Secures devices like laptops, phones, and desktops with antivirus and endpoint protection platforms (EPP).</li>
            <li><strong>Application Security:</strong> Ensures software is free of vulnerabilities through secure coding, testing, and patching.</li>
            <li><strong>Cloud Security:</strong> Protects data and applications in cloud environments through encryption, identity management, and compliance monitoring.</li>
            <li><strong>Identity & Access Management (IAM):</strong> Controls who has access to what resources through multi-factor authentication (MFA) and role-based permissions.</li>
          </ul>

          <h2 style="color: #00d4ff;">Common Threats</h2>
          <p>
            Cybersecurity solutions are designed to counter threats such as phishing, ransomware, DDoS attacks, insider threats, zero-day exploits, and data breaches.
          </p>

          <h2 style="color: #00d4ff;">Why It Matters</h2>
          <p>
            As cyberattacks become more frequent and damaging, proactive cybersecurity is no longer optional. It protects customer trust, safeguards intellectual property, and ensures regulatory compliance. From startups to enterprises, every organization must invest in a robust security framework.
          </p>

          <p>
            Implementing cybersecurity solutions is not just about tools—it's about building a resilient culture of security across people, processes, and technologies.
          </p>

          <p><em>Created by Manmadha | Learn more at <a href="https://www.linkedin.com/in/manmadha-menda-1b3950244" target="_blank" style="color: #66e0ff;">LinkedIn</a></em></p>
        </div>
      </div>
    `
  };

  const openDialog = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const closeDialog = () => {
    setSelectedService(null);
  };

  return (
    <>
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
                        <button 
                          onClick={() => openDialog(service.title)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
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

      {/* Dialog for displaying service templates */}
      <Dialog open={selectedService !== null} onOpenChange={closeDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              {selectedService}
            </DialogTitle>
          </DialogHeader>
          <div 
            className="mt-4"
            dangerouslySetInnerHTML={{ 
              __html: selectedService ? serviceTemplates[selectedService as keyof typeof serviceTemplates] : '' 
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
