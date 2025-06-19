
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
    <section id="for-lenders" className="py-20 bg-gradient-to-br from-copper-50 to-forest-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left visual */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-white shadow-xl border-forest-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-forest-900 mb-6">Portfolio Performance Dashboard</h3>
                
                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-forest-50 to-forest-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-forest-900">2.3%</div>
                    <div className="text-sm text-forest-700">Default Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-copper-50 to-copper-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-copper-900">12.5%</div>
                    <div className="text-sm text-copper-700">Avg ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-forest-50 to-copper-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-forest-900">450+</div>
                    <div className="text-sm text-forest-700">Active Loans</div>
                  </div>
                  <div className="bg-gradient-to-r from-copper-50 to-forest-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-copper-900">94%</div>
                    <div className="text-sm text-copper-700">On-time Rate</div>
                  </div>
                </div>

                {/* Risk distribution chart mockup */}
                <div className="bg-forest-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-forest-900 mb-4">Risk Distribution</h4>
                  <div className="flex justify-between items-end h-32 space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-forest-500 w-8 h-24 rounded-t"></div>
                      <span className="text-xs text-forest-700 mt-2">Low</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-forest-400 w-8 h-20 rounded-t"></div>
                      <span className="text-xs text-forest-700 mt-2">Medium</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-copper-500 w-8 h-12 rounded-t"></div>
                      <span className="text-xs text-forest-700 mt-2">High</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-copper-700 w-8 h-6 rounded-t"></div>
                      <span className="text-xs text-forest-700 mt-2">Very High</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-forest-200 pt-6">
                <blockquote className="text-center italic text-forest-800 mb-4">
                  "A game changer for de-risking small-scale lending. The data quality is unprecedented."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-forest-600 to-forest-700 rounded-full flex items-center justify-center text-white font-bold">
                    AK
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-forest-900">Amara Kone</div>
                    <div className="text-sm text-forest-700">Senior Risk Manager, West Africa</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right content */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center px-4 py-2 bg-copper-100 rounded-full text-copper-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-copper-600 rounded-full mr-2"></span>
              For Financial Institutions
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
              Reliable Scores. <span className="text-copper-700">Real Returns.</span>
            </h2>
            
            <p className="text-xl text-forest-700 mb-8 leading-relaxed">
              Tap into a high-potential segment with verified production-based credit scoring, cash-flow projections, and risk stratification.
            </p>

            <div className="space-y-6 mb-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 card-hover border-forest-200 bg-white/80">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{advantage.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-forest-900">{advantage.title}</h4>
                        <span className="text-sm font-medium text-copper-700 bg-copper-100 px-2 py-1 rounded">
                          {advantage.metric}
                        </span>
                      </div>
                      <p className="text-forest-700 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-forest-700 to-forest-800 hover:from-forest-800 hover:to-forest-900 text-white px-8 py-4 rounded-xl"
              >
                Partner With Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-copper-600 text-copper-700 hover:bg-copper-50 px-8 py-4 rounded-xl"
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
