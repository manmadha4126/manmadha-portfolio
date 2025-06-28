
import { useState } from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-700/30 p-8 rounded-xl border border-slate-600/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white">ti427744842@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white">+91 8074666415</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: Linkedin },
                  { name: "Instagram", icon: Instagram },
                  { name: "Facebook", icon: Facebook },
                  { name: "Twitter", icon: Twitter }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={social.name} className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 cursor-pointer group">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
        <p className="text-gray-400">
          © 2024 Manmadharao Menda. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
