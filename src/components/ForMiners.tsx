
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ForMiners = () => {
  const benefits = [
    {
      title: "No Paperwork Hassles",
      description: "Skip the endless forms and documentation. Your operational data speaks for itself.",
      icon: "📋"
    },
    {
      title: "Direct Equipment Access",
      description: "Get financing offers for excavators, crushers, and processing equipment based on your performance.",
      icon: "🚜"
    },
    {
      title: "Build Credit While You Work",
      description: "Every day of operations strengthens your credit profile for future opportunities.",
      icon: "📈"
    },
    {
      title: "Transparent Scoring",
      description: "Understand exactly how your credit score is calculated with clear explanations.",
      icon: "🔍"
    }
  ];

  return (
    <section id="for-miners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-forest-100 rounded-full text-forest-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-forest-600 rounded-full mr-2"></span>
              For Small-Scale Miners
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
              Grow with <span className="text-copper-700">Confidence</span>
            </h2>
            
            <p className="text-xl text-forest-700 mb-8 leading-relaxed">
              No paperwork. No brokers. Just verified data that unlocks new equipment opportunities and supports your daily operations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold text-forest-900 mb-2">{benefit.title}</h4>
                    <p className="text-forest-700 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-forest-700 to-forest-800 hover:from-forest-800 hover:to-forest-900 text-white px-8 py-4 rounded-xl"
              >
                Start Building Credit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-copper-600 text-copper-700 hover:bg-copper-50 px-8 py-4 rounded-xl"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-gradient-to-br from-forest-50 to-copper-50 border-forest-200">
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" 
                  alt="Small-scale mining operation" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <blockquote className="text-lg italic text-forest-800 mb-4">
                  "This platform finally connects miners like me to real financing. I got approval for a new crusher in just 3 days!"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-copper-600 to-copper-700 rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-forest-900">Joseph Mugabe</div>
                    <div className="text-sm text-forest-700">Gold miner, Zimbabwe</div>
                  </div>
                </div>
              </div>

              {/* Sample miner stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-forest-900 mb-4">Your Mining Profile</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Operating Days</span>
                    <span className="font-semibold text-forest-900">287/365</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Production Consistency</span>
                    <span className="font-semibold text-forest-900">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Compliance Score</span>
                    <span className="font-semibold text-forest-900">Excellent</span>
                  </div>
                  <div className="border-t border-forest-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-forest-800 font-medium">Credit Score</span>
                      <span className="text-2xl font-bold text-copper-700">742</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForMiners;
