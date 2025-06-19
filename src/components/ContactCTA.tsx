
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-forest-800 via-forest-700 to-tech-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-copper-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-tech-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Want to see <span className="text-copper-300">Earthsafe</span> in action?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join hundreds of miners and lenders who are already transforming the mining finance landscape with AI-powered credit intelligence.
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 card-hover">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">For Mining Operations</h3>
              <p className="text-white/80 mb-6">
                See how your operational data can unlock equipment financing and build your credit profile.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-copper-500 to-copper-600 hover:from-copper-600 hover:to-copper-700 text-white w-full rounded-xl"
              >
                Book a Live Demo
              </Button>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 card-hover">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4">For Financial Institutions</h3>
              <p className="text-white/80 mb-6">
                Discover how verified mining data can reduce risk and expand your lending portfolio.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tech-500 to-tech-600 hover:from-tech-600 hover:to-tech-700 text-white w-full rounded-xl"
              >
                Talk to Our Team
              </Button>
            </Card>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm"
            >
              📧 hello@earthsafeminetrack.com
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm"
            >
              📱 +1 (555) 123-4567
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech-400 rounded-full"></div>
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
