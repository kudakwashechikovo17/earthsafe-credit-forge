
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ForLenders = () => {
  const advantages = [
    {
      title: "Verified Production Data",
      description: "Real-time insights from actual mining operations, not self-reported figures.",
      metric: "99.7% accuracy",
      icon: "✅"
    },
    {
      title: "Risk Stratification",
      description: "AI-powered models segment borrowers by reliability and growth potential.",
      metric: "5 risk tiers",
      icon: "📊"
    },
    {
      title: "Cash Flow Projections",
      description: "Predictive analytics based on seasonal patterns and market conditions.",
      metric: "6-month outlook",
      icon: "📈"
    },
    {
      title: "Automated Monitoring",
      description: "Continuous oversight of borrower performance with early warning systems.",
      metric: "24/7 tracking",
      icon: "👁️"
    }
  ];

  return (
    <section id="for-lenders" className="py-20 bg-gradient-to-br from-tech-50 to-forest-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left visual */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-white shadow-xl border-tech-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-tech-800 mb-6">Portfolio Performance Dashboard</h3>
                
                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-tech-50 to-tech-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-tech-800">2.3%</div>
                    <div className="text-sm text-tech-600">Default Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-forest-50 to-forest-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-forest-800">12.5%</div>
                    <div className="text-sm text-forest-600">Avg ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-copper-50 to-copper-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-copper-800">450+</div>
                    <div className="text-sm text-copper-600">Active Loans</div>
                  </div>
                  <div className="bg-gradient-to-r from-earth-50 to-earth-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-earth-800">94%</div>
                    <div className="text-sm text-earth-600">On-time Rate</div>
                  </div>
                </div>

                {/* Risk distribution chart mockup */}
                <div className="bg-earth-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-earth-800 mb-4">Risk Distribution</h4>
                  <div className="flex justify-between items-end h-32 space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-green-400 w-8 h-24 rounded-t"></div>
                      <span className="text-xs text-earth-600 mt-2">Low</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-yellow-400 w-8 h-20 rounded-t"></div>
                      <span className="text-xs text-earth-600 mt-2">Medium</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-400 w-8 h-12 rounded-t"></div>
                      <span className="text-xs text-earth-600 mt-2">High</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-red-400 w-8 h-6 rounded-t"></div>
                      <span className="text-xs text-earth-600 mt-2">Very High</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-earth-200 pt-6">
                <blockquote className="text-center italic text-tech-700 mb-4">
                  "A game changer for de-risking small-scale lending. The data quality is unprecedented."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-400 to-tech-500 rounded-full flex items-center justify-center text-white font-bold">
                    AK
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-tech-800">Amara Kone</div>
                    <div className="text-sm text-tech-600">Senior Risk Manager, West Africa</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right content */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center px-4 py-2 bg-tech-100 rounded-full text-tech-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-tech-500 rounded-full mr-2"></span>
              For Financial Institutions
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-tech-800 mb-6">
              Reliable Scores. <span className="text-copper-600">Real Returns.</span>
            </h2>
            
            <p className="text-xl text-tech-600 mb-8 leading-relaxed">
              Tap into a high-potential segment with verified production-based credit scoring, cash-flow projections, and risk stratification.
            </p>

            <div className="space-y-6 mb-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 card-hover border-tech-200 bg-white/80">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{advantage.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-tech-800">{advantage.title}</h4>
                        <span className="text-sm font-medium text-copper-600 bg-copper-100 px-2 py-1 rounded">
                          {advantage.metric}
                        </span>
                      </div>
                      <p className="text-tech-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tech-600 to-tech-700 hover:from-tech-700 hover:to-tech-800 text-white px-8 py-4 rounded-xl"
              >
                Partner With Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-copper-400 text-copper-600 hover:bg-copper-50 px-8 py-4 rounded-xl"
              >
                View Portfolio Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForLenders;
