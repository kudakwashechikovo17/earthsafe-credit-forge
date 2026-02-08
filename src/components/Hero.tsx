import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/8ec48d40-e9ab-4028-a66b-a1995f374392.png)'
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs sm:text-sm font-medium mb-8 mx-auto max-w-full">
            <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 flex-shrink-0"></span>
            <span className="text-center leading-tight">Digital tools and AI-powered credit intelligence for the underbanked small-scale mining economy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight px-2 drop-shadow-lg">
            Unlock Equipment Financing with{' '}
            <span className="text-gold-300">Mining Data</span>{' '}
            That Works for You
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
            Earthsafe MineTrack transforms production logs, receipts, and compliance records into a lender-trusted credit score, giving small-scale miners access to tools they need to grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4">
            <a href="https://app.earthsafemining.com" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Earthsafe in Action
              </Button>
            </a>
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
