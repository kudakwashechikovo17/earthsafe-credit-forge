
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ProductFeatures from '@/components/ProductFeatures';
import ForMiners from '@/components/ForMiners';
import ForLenders from '@/components/ForLenders';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <ProductFeatures />
      <ForMiners />
      <ForLenders />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
