
import { Card } from '@/components/ui/card';

const ProductFeatures = () => {
  const features = [
    {
      title: "Smart Data Syncing",
      description: "Automatically capture and process mining data from multiple sources",
      icon: "🔄",
      gradient: "from-forest-600 to-forest-700"
    },
    {
      title: "Daily Profit + Expense Dashboards",
      description: "Real-time financial insights with clear profit and loss tracking",
      icon: "📊",
      gradient: "from-copper-600 to-copper-700"
    },
    {
      title: "Automated Compliance Alerts",
      description: "Stay compliant with automated monitoring and instant notifications",
      icon: "⚠️",
      gradient: "from-forest-700 to-copper-600"
    },
    {
      title: "AI-Powered Credit Score",
      description: "Transparent credit scoring with SHAP explanations you can understand",
      icon: "🧠",
      gradient: "from-copper-700 to-forest-700"
    },
    {
      title: "In-App Loan Offers",
      description: "Receive instant equipment financing offers directly in the platform",
      icon: "💰",
      gradient: "from-forest-600 to-copper-600"
    },
    {
      title: "Downloadable Financial Statements",
      description: "Professional reports ready for banks, investors, and compliance",
      icon: "📄",
      gradient: "from-copper-600 to-forest-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-copper-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            Powerful Features for Mining Success
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Everything you need to digitize operations, build credit, and access financing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover border-forest-200 bg-white/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} text-white text-2xl mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-forest-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-forest-700 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-forest-200">
            <div className="bg-gradient-to-r from-forest-700 to-forest-800 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm ml-4">Earthsafe MineTrack Dashboard</span>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-forest-50 to-forest-100 p-6 rounded-xl">
                  <h4 className="text-forest-800 font-semibold mb-2">Credit Score</h4>
                  <div className="text-3xl font-bold text-forest-900">742</div>
                  <div className="text-sm text-forest-700">+12 this month</div>
                </div>
                <div className="bg-gradient-to-r from-copper-50 to-copper-100 p-6 rounded-xl">
                  <h4 className="text-copper-800 font-semibold mb-2">Monthly Profit</h4>
                  <div className="text-3xl font-bold text-copper-900">$3,240</div>
                  <div className="text-sm text-copper-700">+8.5% vs last month</div>
                </div>
                <div className="bg-gradient-to-r from-forest-50 to-copper-50 p-6 rounded-xl">
                  <h4 className="text-forest-800 font-semibold mb-2">Loan Available</h4>
                  <div className="text-3xl font-bold text-forest-900">$12,500</div>
                  <div className="text-sm text-copper-700">Equipment financing</div>
                </div>
              </div>
              <div className="bg-forest-50 p-6 rounded-xl">
                <h4 className="font-semibold text-forest-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Gold ore processing - 150kg</span>
                    <span className="text-forest-700 font-medium">+$890</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Equipment maintenance</span>
                    <span className="text-copper-700 font-medium">-$120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-800">Compliance check passed</span>
                    <span className="text-forest-700 font-medium">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
