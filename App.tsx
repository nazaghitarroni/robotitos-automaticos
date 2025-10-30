import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import ContactForm from './components/ContactForm';
import JoinUs from './components/JoinUs';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <Solutions />
        <ContactForm />
        <JoinUs />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;