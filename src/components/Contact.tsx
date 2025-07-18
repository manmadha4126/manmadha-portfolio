import { useState } from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showProfileName, setShowProfileName] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS with your public key
  emailjs.init("3N-XWqP3WnTInz1sp");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "427744842", // Service ID
        "template_jk84qf7", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const socialLinks = [{
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/manmadha-menda-1b3950244",
    displayName: "Manmadha Menda"
  }, {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/manmadha_21/",
    displayName: "manmadha_21"
  }, {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/manmadhadithya.menda",
    displayName: "Manmadha M"
  }, {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/manmadha_21",
    displayName: "manmadha_21"
  }];

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
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300" required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300" required />
              </div>
              <div>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none" required></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? "Sending..." : "Send Message"}
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
                {socialLinks.map(social => {
                  const IconComponent = social.icon;
                  return (
                    <div key={social.name} className="relative">
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 cursor-pointer group"
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </a>
                      {hoveredSocial === social.name && (
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800/90 text-cyan-400 px-3 py-1 rounded-lg text-sm font-medium border border-cyan-500/50 whitespace-nowrap z-10">
                          {social.displayName}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Profile Circle */}
              <div className="mt-8 flex justify-center">
                <div 
                  className="relative w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setShowProfileName(true)}
                  onMouseLeave={() => setShowProfileName(false)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800/90 backdrop-blur-sm">
                    <img 
                      src="https://i.postimg.cc/bJ5F6MkX/Profile.jpg" 
                      alt="Manmadharao Menda Profile" 
                      className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover" 
                    />
                  </div>
                  {showProfileName && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800/90 text-cyan-400 px-3 py-1 rounded-lg text-sm font-medium border border-cyan-500/50 whitespace-nowrap">
                      Manmadha
                    </div>
                  )}
                </div>
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
