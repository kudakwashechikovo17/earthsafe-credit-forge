
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-earth-50 via-white to-forest-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-copper-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-forest-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-copper-100 to-forest-100 rounded-full text-forest-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-copper-500 rounded-full mr-2"></span>
            AI-powered credit intelligence for the unbanked mining economy
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-forest-800 mb-6 leading-tight">
            Unlock Equipment Financing with{' '}
            <span className="gradient-text">Mining Data</span>{' '}
            That Works for You
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-forest-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Earthsafe MineTrack transforms production logs, receipts, and compliance records into a lender-trusted credit score — giving small-scale miners access to tools they need to grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-copper-400 text-copper-600 hover:bg-copper-50 px-8 py-4 text-lg rounded-xl w-full sm:w-auto transition-all duration-300"
            >
              Explore the Platform
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-forest-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
              <span>Trusted by 500+ miners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
              <span>$2M+ in financing enabled</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
