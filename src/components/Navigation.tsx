
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-lg shadow-2xl border border-slate-700/50" 
          : "bg-slate-800/60 backdrop-blur-sm"
      } rounded-full px-6 py-3`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/bJ5F6MkX/Profile.jpg" 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400/30"
            />
            <div className="text-xl font-bold text-white">
              MM<span className="text-cyan-400">.</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ml-8">
            {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-3 py-1 rounded-full hover:bg-cyan-400/10"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-4"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl animate-fade-in">
            <div className="p-4 space-y-2">
              {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-slate-800/50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
