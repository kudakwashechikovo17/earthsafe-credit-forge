
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-earth-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-copper-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest-800">Earthsafe MineTrack</h1>
              <p className="text-xs text-forest-600">AI-powered credit intelligence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">Home</a>
            <a href="#how-it-works" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">How It Works</a>
            <a href="#for-miners" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">For Miners</a>
            <a href="#for-lenders" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">For Lenders</a>
            <a href="#about" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">About</a>
            <a href="#contact" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-6 py-2 rounded-lg transition-all duration-300">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-forest-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-earth-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">Home</a>
              <a href="#how-it-works" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">How It Works</a>
              <a href="#for-miners" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">For Miners</a>
              <a href="#for-lenders" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">For Lenders</a>
              <a href="#about" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">About</a>
              <a href="#contact" className="text-forest-700 hover:text-copper-500 transition-colors font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-forest-600 to-forest-700 text-white w-full mt-4">
                Request Demo
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
