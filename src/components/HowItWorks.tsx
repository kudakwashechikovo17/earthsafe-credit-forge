
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Digitize Mining Data",
      description: "We extract real-time insights from scanned receipts, logs, and mobile-money flows.",
      icon: "📱",
      color: "from-tech-500 to-tech-600"
    },
    {
      step: "02", 
      title: "AI Credit Scoring",
      description: "Our explainable models assess reliability and project financial health.",
      icon: "🧠",
      color: "from-forest-500 to-forest-600"
    },
    {
      step: "03",
      title: "Finance-Ready Offers",
      description: "Good scores trigger instant equipment-loan offers from trusted partners.",
      icon: "💰",
      color: "from-copper-500 to-copper-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Transform your mining operations into credit-worthy data in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-earth-300 to-transparent z-0"></div>
              )}
              
              <Card className="p-8 text-center card-hover border-earth-200 relative z-10 bg-white">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-xl font-bold mb-6`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-forest-800 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-forest-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Visual flow diagram */}
        <div className="mt-16 p-8 bg-gradient-to-r from-earth-50 to-forest-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-tech-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">📄</span>
              </div>
              <span className="text-sm font-medium text-forest-700">Paper Logs</span>
            </div>
            <div className="text-copper-500 text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-forest-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">🔄</span>
              </div>
              <span className="text-sm font-medium text-forest-700">Digitization</span>
            </div>
            <div className="text-copper-500 text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-copper-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-sm font-medium text-forest-700">Credit Engine</span>
            </div>
            <div className="text-copper-500 text-2xl">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-tech-100 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl">🎯</span>
              </div>
              <span className="text-sm font-medium text-forest-700">Loan Offer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
