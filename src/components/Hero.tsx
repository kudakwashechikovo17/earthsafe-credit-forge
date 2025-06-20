
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-full text-green-800 text-xs sm:text-sm font-medium mb-8 mx-auto max-w-full">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2 flex-shrink-0"></span>
            <span className="text-center leading-tight">Digital tools and AI-powered credit intelligence for the underbanked small-scale mining economy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight px-2">
            Unlock Equipment Financing with{' '}
            <span className="text-green-700">Mining Data</span>{' '}
            That Works for You
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Earthsafe MineTrack transforms production logs, receipts, and compliance records into a lender-trusted credit score — giving small-scale miners access to tools they need to grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-w-0"
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto transition-all duration-300 min-w-0"
            >
              Explore the Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
