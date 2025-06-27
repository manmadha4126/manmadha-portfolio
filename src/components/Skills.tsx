
const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Data Structures & Algorithms", level: 85, color: "from-green-400 to-green-600" },
    { name: "Linux OS", level: 88, color: "from-orange-400 to-orange-600" },
    { name: "DevOps Tools", level: 82, color: "from-blue-400 to-blue-600" },
    { name: "Power BI", level: 80, color: "from-purple-400 to-purple-600" },
    { name: "AWS", level: 85, color: "from-orange-400 to-orange-600" },
    { name: "Security Analytics", level: 87, color: "from-red-400 to-red-600" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills & <span className="text-cyan-400">Expertise</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <span className="text-cyan-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} animate-[scale-in_0.8s_ease-out_${index * 0.1}s_both]`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
