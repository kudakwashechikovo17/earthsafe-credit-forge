
import { Card } from '@/components/ui/card';

const ProductFeatures = () => {
  const features = [
    {
      title: "Smart Data Syncing",
      description: "Automatically capture and process mining data from multiple sources",
      icon: "🔄",
      color: "bg-green-700"
    },
    {
      title: "Daily Profit + Expense Dashboards",
      description: "Real-time financial insights with clear profit and loss tracking",
      icon: "📊",
      color: "bg-yellow-600"
    },
    {
      title: "Automated Compliance Alerts",
      description: "Stay compliant with automated monitoring and instant notifications",
      icon: "⚠️",
      color: "bg-green-600"
    },
    {
      title: "AI-Powered Credit Score",
      description: "Transparent credit scoring with SHAP explanations you can understand",
      icon: "🧠",
      color: "bg-yellow-700"
    },
    {
      title: "In-App Loan Offers",
      description: "Receive instant equipment financing offers directly in the platform",
      icon: "💰",
      color: "bg-green-600"
    },
    {
      title: "Downloadable Financial Statements",
      description: "Professional reports ready for banks, investors, and compliance",
      icon: "📄",
      color: "bg-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Mining Success
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to digitize operations, build credit, and access financing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover border-gray-200 bg-white backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} text-white text-2xl mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-green-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm ml-4">Earthsafe MineTrack Dashboard</span>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-green-800 font-semibold mb-2">Credit Score</h4>
                  <div className="text-3xl font-bold text-green-900">685</div>
                  <div className="text-sm text-green-700">Building credit history</div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h4 className="text-yellow-800 font-semibold mb-2">Monthly Profit</h4>
                  <div className="text-3xl font-bold text-yellow-900">$1,850</div>
                  <div className="text-sm text-yellow-700">Last 30 days</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-green-800 font-semibold mb-2">Loan Available</h4>
                  <div className="text-3xl font-bold text-green-900">$5,200</div>
                  <div className="text-sm text-yellow-700">Equipment financing</div>
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
