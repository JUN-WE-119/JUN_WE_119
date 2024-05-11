
import React from 'react';
import Hero from '../Components/hero';
import HowItWorks from '../Components/howitworks';
import Features from '../Components/features';
import RecipeGallery from '../Components/recipegallery';
import Footer from '../Components/footer';

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <RecipeGallery />
      <Footer />
    </div>
  );
}

export default Home;